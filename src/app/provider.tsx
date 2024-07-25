// TelegramProvider.tsx
'use client'
import Script from "next/script";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ITelegramUser, IWebApp, IAppUser } from "../../types";
import axios from 'axios';

export interface ITelegramContext {
  webApp?: IWebApp;
  user?: ITelegramUser;
}

export interface IAppUserContext {
  appuser?: IAppUser;
  loading: boolean;
}

export const TelegramContext = createContext<ITelegramContext>({});
export const AppUserContext = createContext<IAppUserContext>({ loading: true });

export const TelegramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [webApp, setWebApp] = useState<IWebApp | null>(null);
  const [appUser, setAppUser] = useState<IAppUser | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  useEffect(() => {
    const app = (window as any).Telegram?.WebApp;
    if (app) {
      app.ready();
      setWebApp(app);
      if (app.initDataUnsafe?.user?.id) {
        addUser(app.initDataUnsafe.user.id);
      } else {
        setLoading(false); // If there's no user ID, stop loading
      }
    } else {
      setLoading(false); // If the app is not available, stop loading
    }
  }, []);

  const addUser = async (chat_id: number) => {
    try {
      const response = await axios.post(`${apiUrl}/api/users/adduser`, { chat_id });
      if (response.status === 201) {
        setAppUser(response.data);
      } else {
        console.error('Failed to add user:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding user:', error);
    } finally {
      setLoading(false); // Set loading to false after the API call
    }
  };

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
      loading: loading
    };
  }, [appUser, loading]);

  return (
    <TelegramContext.Provider value={value}>
      {/* Make sure to include script tag with "beforeInteractive" strategy to pre-load web-app script */}
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
