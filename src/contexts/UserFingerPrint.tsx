import { createContext, ReactNode, useEffect, useState } from "react";
import FingerprintJS from '@fingerprintjs/fingerprintjs'

interface IProviderProps {
  children: ReactNode;
}

interface IUserFingerPrintData {
  fingerprint: Promise<string>
}

export const UserContextFingerPrint = createContext<IUserFingerPrintData>({} as IUserFingerPrintData);

const UserFingerPrint = ({ children }: IProviderProps) => {
  async function computeHash() {
    const fpPromise = FingerprintJS.load({ monitoring: false })
    const fp = await fpPromise
    const result = await fp.get()
    return result
  }

  const fingerprint = computeHash()
  return (
    <UserContextFingerPrint.Provider value={{ fingerprint }}>
      {children}
    </UserContextFingerPrint.Provider>
  );
};

export default UserFingerPrint;