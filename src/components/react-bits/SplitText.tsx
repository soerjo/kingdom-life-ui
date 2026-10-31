'use client';

import React, { ReactNode } from 'react';
import { cn } from '@/utils';

interface SplitTextProps {
  text: string;
  by?: 'word' | 'character';
  className?: string;
  wordWrapper?: (word: string, index: number) => ReactNode;
  charWrapper?: (char: string, index: number) => ReactNode;
}

export const SplitText = ({ text, by = 'word', className, wordWrapper, charWrapper }: SplitTextProps) => {
  const renderCharacters = (word: string, wordIndex: number) => {
    return word.split('').map((char, charIndex) => {
      const key = `char-${wordIndex}-${charIndex}`;
      if (charWrapper) {
        return <React.Fragment key={key}>{charWrapper(char, charIndex)}</React.Fragment>;
      }
      return (
        <span key={key} className="inline-block whitespace-nowrap leading-tight">
          {char}
        </span>
      );
    });
  };

  const renderWords = () => {
    return text.split(' ').map((word, wordIndex) => {
      const key = `word-${wordIndex}`;
      const inner = by === 'character' ? renderCharacters(word, wordIndex) : word;
      if (wordWrapper) {
        return <React.Fragment key={key}>{wordWrapper(word, wordIndex)}</React.Fragment>;
      }
      return (
        <span key={key} className="inline-block whitespace-nowrap leading-tight mr-2">
          {inner}
        </span>
      );
    });
  };

  return <div className={cn('inline', className)}>{renderWords()}</div>;
};
