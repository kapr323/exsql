import TableView from './components/Table/TableView.tsx';
import React, { useState } from 'react';

const App = () => {
  const [headers, setHeaders] = useState<string[]>([]);
  const [data, setData] = useState<string[][]>([]);
  const handleFileLoad = (event: any) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        setHeaders(json.headers);
        setData(json.data);
      } catch (err) {
        console.error("Chyba JSONu!", err);
      }
    };
    reader.readAsText(file);
  };
  console.log('Bod 2');
  return (
    <div>
      <h1>ExSQL – načti JSON tabulku</h1>
      <input type="file" accept=".json" onChange={handleFileLoad} />
      {data.length > 0 && <TableView headers={headers} data={data} />}
    </div>
  );
};
export default App;