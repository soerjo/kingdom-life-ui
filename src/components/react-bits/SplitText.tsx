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
      return charWrapper ? (
        <React.Fragment key={key}>{charWrapper(char, charIndex)}</React.Fragment>
      ) : (
        <span key={key} className="inline-block whitespace-nowrap leading-tight">
          {char}
        </span>
      );
    });
  };

  const renderWords = () => {
    return text.split(' ').map((word, wordIndex) => {
      const key = `word-${wordIndex}`;
      return wordWrapper ? (
        <React.Fragment key={key}>{wordWrapper(word, wordIndex)}</React.Fragment>
      ) : (
        <span key={key} className="inline-block whitespace-nowrap leading-tight mr-2">
          {by === 'character' ? renderCharacters(word, wordIndex) : word}
        </span>
      );
    });
  };

  return <div className={cn('inline', className)}>{renderWords()}</div>;
};
