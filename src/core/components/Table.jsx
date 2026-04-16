import { clsx } from 'clsx';

/**
 * Table — responsive data table
 * columns: [{ key, header, render?, className? }]
 * data:    array of row objects
 */
const Table = ({ columns = [], data = [], keyExtractor, className = '' }) => (
  <div className="w-full overflow-x-auto rounded-xl">
    {/* Desktop table */}
    <table className={clsx('w-full text-sm border-collapse hidden md:table', className)}>
      <thead>
        <tr className="border-b border-day-divider dark:border-night-divider">
          {columns.map((col) => (
            <th
              key={col.key}
              className={clsx(
                'text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider',
                'text-day-text-tertiary dark:text-night-text-tertiary',
                col.className,
              )}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr
            key={keyExtractor ? keyExtractor(row) : idx}
            className="border-b border-day-divider dark:border-night-divider hover:bg-day-bg-surface2 dark:hover:bg-night-bg-surface2 transition-colors"
          >
            {columns.map((col) => (
              <td key={col.key} className={clsx('px-4 py-3 text-day-text-primary dark:text-night-text-primary', col.className)}>
                {col.render ? col.render(row[col.key], row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

    {/* Mobile card list */}
    <div className="md:hidden flex flex-col gap-3">
      {data.map((row, idx) => (
        <div
          key={keyExtractor ? keyExtractor(row) : idx}
          className="bg-white dark:bg-night-bg-surface rounded-xl border border-day-stroke-card dark:border-night-stroke-card p-4"
        >
          {columns.map((col) => (
            <div key={col.key} className="flex justify-between py-1 text-sm">
              <span className="text-day-text-tertiary dark:text-night-text-tertiary font-medium">{col.header}</span>
              <span className="text-day-text-primary dark:text-night-text-primary">
                {col.render ? col.render(row[col.key], row) : row[col.key]}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Table;