import classNames from 'classnames';
import styles from './Table.module.scss';

interface Props {
  className?: string;
  config: Array<ConfigItemType>;
  items: Array<Record<string, JSX.Element>>;
  handler?: (val: string) => void;
}

export type ConfigItemType = {
  label?: JSX.Element;
  colClassName?: string;
  width?: number | string;
  maxWidth?: number | string;
  name: string;
};

export const Table = ({ className, config, items, handler }: Props) => {
  return (
    <table className={classNames(styles.wrapper, className)}>
      <thead className={styles.head}>
        <tr>
          {config.map(({ label, colClassName, width, maxWidth }, index) => {
            return (
              <th
                className={classNames(colClassName, styles.header)}
                style={{ width, maxWidth }}
                key={`table-head-item-${index}`}
              >
                <div className={styles.headLabel}>{label}</div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {items.map((el, index) => {
          return (
            <tr
              key={`table-row-${index}`}
              onClick={() => {
                if (handler) {
                  handler(el.id.props.children as string);
                }
              }}
            >
              {config.map(
                ({ name, colClassName, width, maxWidth }, columnIndex) => {
                  return (
                    <th
                      className={classNames(colClassName, {
                        [styles.divider]: index !== 0,
                      })}
                      style={{ width, maxWidth }}
                      key={`table-column-item-${columnIndex}`}
                    >
                      {el[name]}
                    </th>
                  );
                },
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
