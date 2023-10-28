"use client";

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Link3() {
    const [items, setitems] = useState([]);

    useEffect(() => {
        fetch('data/Tarifeler.json').then(function (responce) {
            return responce.json();
        }).then(function (result) {
            setitems(result);
        });
    }, []);


    const baslangic = (item) => {
        return new Date(item.Baslangic).toLocaleDateString();
    };

    const bitis = (item) => {
        return new Date(item.Bitis).toLocaleDateString();
    };


    return (
        <div className="container p-3">
            <DataTable value={items} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="Baslangic" header="Başlangıç" body={baslangic}></Column>
                <Column field="Bitis" header="Bitis" body={bitis}></Column>
                <Column field="Gerilim" header="Gerilim"></Column>
                <Column field="AboneGrubu" header="Abone Grubu"></Column>
                <Column field="Aktif" header="Aktif"></Column>
                <Column field="Gunduz" header="Gunduz"></Column>
                <Column field="Puant" header="Puant"></Column>
                <Column field="Gece" header="Gece"></Column>
                <Column field="DagitimBedeli" header="Dağıtım Bedeli"></Column>
                <Column field="Reaktif" header="Reaktif"></Column>
            </DataTable>
        </div>
    )
}