import { ScanLine, Search as SearchIcon } from 'lucide-react';
import React from 'react';

export const Search = () => {
  return (
    <div className="flex items-center justify-between w-full gap-2 p-3 border rounded-2xl border-brandBlueOpacity">
      <div className="flex items-center justify-start gap-2">
        <SearchIcon className="w-6 h-6" />
        <input type="text" className="text-sm focus:outline-0" />
      </div>
      <ScanLine className="w-6 h-6" />
    </div>
  );
};
