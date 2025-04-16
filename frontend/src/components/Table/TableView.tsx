import React from 'react';
import styles from './TableView.module.css';

type TableViewProps = {
  headers: string[];
  data: string[][];
};
const TableView: React.FC<TableViewProps> = ({ headers, data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          {headers.map((header, idx) => (
            <th key={idx} className={styles.th}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, ridx) => (
          <tr key={ridx} className={styles.tr}>
            {row.map((cell, cidx) => (
              <td key={cidx} className={styles.td}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
