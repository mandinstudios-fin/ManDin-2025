import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

type ContactContextType = {
    isContactOpen: boolean;
    toggleContact: () => void;
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider = ({ children }: { children: ReactNode }) => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const toggleContact = () => {
        setIsContactOpen((prev) => !prev);
    };

    return (
        <ContactContext.Provider value={{ isContactOpen, toggleContact }}>
            {children}
        </ContactContext.Provider>
    );
};

export default function useContact() {
    const context = useContext(ContactContext);
    if (context === undefined) {
        throw new Error('useContact must be used within a ContactProvider');
    }
    return context;
};