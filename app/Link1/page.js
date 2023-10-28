"use client";

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default function Link1(){
  const [items, setitems] = useState([]);


  useEffect(() => {
    fetch('https://api.epias.com.tr/epias/exchange/transparency/market/day-ahead-interim-mcp?date=2023-10-10').then(function (responce) {
        return responce.json();
    }).then(function (result) {
        setitems(result);
    });
}, []);

    return(
      <div className="container p-3">
            <DataTable value={items} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="date" header="date"></Column>
          
            </DataTable>
        </div>
    )
}
