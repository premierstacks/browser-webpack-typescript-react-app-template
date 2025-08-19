import { useEffect } from 'react';

export interface MetaArgs {
  title?: string;
  keywords?: string;
  description?: string;
}

export function useSeo({ title, keywords, description }: MetaArgs): void {
  useEffect(() => {
    if (title !== undefined) {
      document.title = title;
    }

    if (keywords !== undefined) {
      let k = document.querySelector('meta[name="keywords"]');

      if (k === null) {
        k = document.createElement('meta');
        k.setAttribute('name', 'keywords');
        document.head.appendChild(k);
      }

      k.setAttribute('content', keywords);
    }

    if (description !== undefined) {
      let d = document.querySelector('meta[name="description"]');

      if (d === null) {
        d = document.createElement('meta');
        d.setAttribute('name', 'description');
        document.head.appendChild(d);
      }

      d.setAttribute('content', description);
    }
  }, [title, keywords, description]);
}

export function useDocumentLang(locale: string): void {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
}
