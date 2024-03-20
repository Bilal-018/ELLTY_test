import React, { useState } from 'react'
import { CheckBox } from './CheckBox';
import { Button } from './Button';

export const ModalBox = () => {
    const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5', 'Page 6'];
    const [selectedPages, setSelectedPages] = useState({});

    const handleCheckboxChange = (page) => {
        setSelectedPages(prevState => {
            const newSelectedPages = {
                ...prevState,
                [page]: !prevState[page]
            };

            const allSelected = pages.every(page => newSelectedPages[page]);

            if (!allSelected) {
                delete newSelectedPages['All pages'];
            }

            return newSelectedPages;
        });
    }

    const handleSelectAll = () => {
        const newSelectedPages = {};
        for (let page of pages) {
            newSelectedPages[page] = true;
        }
        setSelectedPages(newSelectedPages);
    }

    const handleDeselectAll = () => {
        setSelectedPages({});
    }

    return (
        <div className='modal'>
            <CheckBox label="All pages"
                isChecked={pages.every(page => selectedPages[page])}
                onCheck={() => {
                    if (pages.every(page => selectedPages[page])) {
                        handleDeselectAll();
                    } else {
                        handleSelectAll();
                    }
                }} />

            <div className='divider-container'>
                <div className='divider'></div>
            </div>

            <div className='pages-container'>
                {pages.map(page => (
                    <CheckBox key={page} label={page} isChecked={!!selectedPages[page]} onCheck={() => handleCheckboxChange(page)} />
                ))}
            </div>

            <div className='divider-container'>
                <div className='divider'></div>
            </div>

            <div className='btn-container'>
                <Button />
            </div>
        </div>
    )
}
