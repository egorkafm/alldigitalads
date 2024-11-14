import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type LinkData = {
  id: number;
  platform: string;
  link: string;
  backgroundColor: string;
};

type ProfileData = {
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
};

type StoreContextType = {
  links: LinkData[];
  addLink: () => void;
  updateLink: (id: number, field: keyof LinkData, value: string) => void;
  removeLink: (id: number) => void;
  saveLinks: () => void;
  profile: ProfileData;
  updateProfile: (field: keyof ProfileData, value: string) => void;
  saveProfile: () => void;
  resetProfile: () => void;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

type StoreProviderProps = {
  children: ReactNode;
};

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [links, setLinks] = useState<LinkData[]>([]);
  const [profile, setProfile] = useState<ProfileData>({
    firstName: '',
    lastName: '',
    email: '',
    profileImage: '',
  });

  useEffect(() => {
    const savedLinks = localStorage.getItem('links');
    const savedProfile = localStorage.getItem('profile');

    if (savedLinks) {
      setLinks(JSON.parse(savedLinks));
    }

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const addLink = () => {
    setLinks((prevLinks) => [
      ...prevLinks,
      { id: Date.now(), platform: '', link: '', backgroundColor: '' },
    ]);
  };

  const updateLink = (id: number, field: keyof LinkData, value: string) => {
    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.id === id ? { ...link, [field]: value } : link,
      ),
    );
  };

  const removeLink = (id: number) => {
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
  };

  const saveLinks = () => {
    localStorage.setItem('links', JSON.stringify(links));
  };

  const updateProfile = (field: keyof ProfileData, value: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, [field]: value }));
  };

  const resetProfile = () => {
    setProfile({
      firstName: '',
      lastName: '',
      email: '',
      profileImage: '',
    });
    localStorage.removeItem('profile');
  };

  const saveProfile = () => {
    localStorage.setItem('profile', JSON.stringify(profile));
  };

  return (
    <StoreContext.Provider
      value={{
        links,
        addLink,
        updateLink,
        removeLink,
        saveLinks,
        profile,
        updateProfile,
        resetProfile,
        saveProfile,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
