/**
 * PreferencesContext - User preferences and app settings
 * Manages user preferences like theme, newsletter prompt display, etc.
 */

import { createContext, useContext, useState, ReactNode } from 'react';

interface PreferencesContextType {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  newsletterPromptShown: boolean;
  setNewsletterPromptShown: (shown: boolean) => void;
}

/**
 * Create Preferences context
 */
const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

/**
 * PreferencesProvider - Wrap your app with this
 */
export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [newsletterPromptShown, setNewsletterPromptShown] = useState(
    localStorage.getItem('newsletterPromptShown') === 'true'
  );

  // Persist newsletter prompt shown state
  const handleSetNewsletterPromptShown = (shown: boolean) => {
    setNewsletterPromptShown(shown);
    localStorage.setItem('newsletterPromptShown', shown.toString());
  };

  return (
    <PreferencesContext.Provider
      value={{
        theme,
        setTheme,
        newsletterPromptShown,
        setNewsletterPromptShown: handleSetNewsletterPromptShown,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

/**
 * usePreferences - Use this hook to access user preferences in any component
 */
export function usePreferences(): PreferencesContextType {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences must be used within PreferencesProvider');
  }
  return context;
}
