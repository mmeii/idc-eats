import React from 'react';

const Radiobutton = ({ category }) => {
    return (
        <div className="checkbox">
            <input 
                type="radio" 
                id={category.displayName} 
                name="diet"
                value={category.categoryId}
                defaultChecked={category.selected} />
                
            
            <label htmlFor={category.displayName}>{category.displayName}</label>
        </div>
    );
}

export default Radiobutton;