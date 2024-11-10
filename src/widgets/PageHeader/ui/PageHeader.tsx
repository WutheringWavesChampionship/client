import classNames from 'classnames';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageEnum } from '@entities/constants';
import { Button, TextContent } from '@shared/components';
import styles from './PageHeader.module.scss';

interface Props {
  className?: string;
  breadcrumbs: AtLeastOne<{ href?: string; title: string }>;
  hideTitle?: boolean;
  lastTitle?: string;
}

type AtLeastOne<T> = [T, ...T[]];

export const PageHeader = ({
  className,
  breadcrumbs,
  hideTitle = false,
  lastTitle,
}: Props) => {
  const { i18n } = useTranslation();
  const changeLanguage = useCallback(() => {
    if (i18n.language === LanguageEnum.EN) {
      i18n.changeLanguage(LanguageEnum.RU);
    } else {
      i18n.changeLanguage(LanguageEnum.EN);
    }
  }, [i18n]);
  const last = breadcrumbs[breadcrumbs.length - 1];
  return (
    <header className={classNames(styles.wrapper, className)}>
      {breadcrumbs.length > 1 && (
        <div className={styles.breadcrumbs}>
          {breadcrumbs.map(({ href, title }, index) => {
            return (
              <React.Fragment key={`page-header-breadcrumbs-${href}-${index}`}>
                <Link className={styles.link} to={href || ''}>
                  <TextContent color="invert">{title}</TextContent>
                </Link>
                <TextContent color="invert" className={styles.separator}>
                  /
                </TextContent>
              </React.Fragment>
            );
          })}
        </div>
      )}
      <div className={styles.main}>
        <TextContent
          fontWeight="bold"
          variant="h1"
          color="invert"
          size={32}
          className={classNames({ [styles.hide]: hideTitle })}
        >
          {lastTitle || last.title}
        </TextContent>
        <Button onClick={changeLanguage}>{i18n.language.toUpperCase()}</Button>
      </div>
    </header>
  );
};
