import React from 'react';

const Checkbox = ({ category }) => {
    return (
        <div className="checkbox">
            <input 
                type="checkbox" 
                aria-label="checkbox"
                id={category.displayName} 
                name={category.categoryId} 
                value={category.displayName}
                defaultChecked={category.selected} />
                
            
            <label htmlFor={category.displayName}>{category.displayName}</label>
        </div>
    );
}

export default Checkbox;
