import { useState } from "react";
import './showModal.css';

function ShowModal({ children, buttonLabel }) {
    const [visible, setVisible] = useState(false);
    const hideWhenVisible = { display: visible ? 'none' : '' };
    const showWhenVisible = { display: visible ? '' : 'none' };
    return (
        <>
            <div style={hideWhenVisible}>
                <button className="show-modal__add" onClick={() => setVisible(true)}>{buttonLabel}</button>
            </div>
            <div style={showWhenVisible}>
                {children};
                <button onClick={() => setVisible(false)}>Cancel</button>
            </div>
        </>
    )
}
export default ShowModal;
