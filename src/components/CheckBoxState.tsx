import { useState } from "react";
import type { ChangeEvent } from "react";
import Form from "./Form";

const CheckBoxState = () => {
    const [checked, setChecked] = useState<boolean>(false);

    // Styles moved to external CSS (src/index.css)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setChecked(isChecked);
        if (isChecked) {
            alert('thank you sir for accept term and conditions');
        }
    };

    return (
        <div className="terms-container">
            <h3 className="terms-heading">Terms and Conditions</h3>
            <div className="terms-box">
                <p className="terms-paragraph">
                    By checking the box below you agree to the Terms and Conditions of this application. Please read the following carefully before accepting. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
                <p>
                    Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
                </p>
                <p>
                    Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
                </p>
            </div>

            <label className="terms-label">
                <input type="checkbox" checked={checked} onChange={handleChange} />
                I accept the Terms and Conditions
            </label>
            <p className="terms-accepted">Accepted: <strong>{checked ? 'Yes' : 'No'}</strong></p>

            {/* Show Form when user accepts Terms */}
            {checked && (
                <div className="terms-form-wrapper">
                    <Form />
                </div>
            )}
        </div>
    );
};

export default CheckBoxState;
