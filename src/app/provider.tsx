'use client';
import Script from "next/script";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ITelegramUser, IWebApp, IAppUser } from "../../types";

export interface ITelegramContext {
  webApp?: IWebApp;
  user?: ITelegramUser;
}

export interface IAppUserContext {
  appuser?: IAppUser;
  loading: boolean;
  fetchAndUpdateUser: (chat_id: number) => Promise<void>;
}

export const TelegramContext = createContext<ITelegramContext>({});
export const AppUserContext = createContext<IAppUserContext>({ loading: true, fetchAndUpdateUser: async () => {} });

export const TelegramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [webApp, setWebApp] = useState<IWebApp | null>(null);
  const [appUser, setAppUser] = useState<IAppUser | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  const fetchAndUpdateUser = async (chat_id: number) => {
    try {
      const response = await fetch(`${apiUrl}/api/users/${chat_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await response.json();
      setAppUser(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;

    if (app) {
      app.ready();
      const chat_id = app.initDataUnsafe?.user?.id;
    // const chat_id = 730149343;
      const addUser = async (chat_id: number) => {
        try {
          const response = await fetch(`${apiUrl}/api/users/adduser`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ chat_id }),
          });

          if (!response.ok) {
            throw new Error('Failed to add user');
          }

          const data = await response.json();
          setAppUser(data);
        } catch (error) {
          console.error('Error adding user:', error);
        } finally {
          setLoading(false);
        }
      };

      if (chat_id) {
        addUser(chat_id);
        fetchAndUpdateUser(chat_id); // Fetch and update user after app is ready
      }
      setWebApp(app);
    } else {
      setLoading(false);
    }
  }, []);

  const value = useMemo(() => {
    return webApp
      ? {
          webApp,
          unsafeData: webApp.initDataUnsafe,
          user: webApp.initDataUnsafe.user,
        }
      : {};
  }, [webApp]);

  const userValue = useMemo(() => {
    return {
      appuser: appUser,
      loading: loading,
      fetchAndUpdateUser,
    };
  }, [appUser, loading]);

  return (
    <TelegramContext.Provider value={value}>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />      
      <AppUserContext.Provider value={userValue}>
        {children}
      </AppUserContext.Provider>
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => useContext(TelegramContext);
export const useAppUser = () => useContext(AppUserContext);
