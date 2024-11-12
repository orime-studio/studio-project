import React, { useState, useEffect } from 'react';

const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  // פתח את ה-Drawer אחרי 3 שניות
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // פתח אחרי 3 שניות

    // מניעת דליפה של טיימר כשחוזרים מהקומפוננטה
    return () => clearTimeout(timer);
  }, []);

  // פונקציה לסגור את ה-Drawer
  const closeDrawer = () => setIsOpen(false);

  return (
    <div>
      <div className={`side-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-content">
          <h2>
      האם העסק שלכם מוכן לשלב הבא? 
            </h2>

            <p>אנחנו כאן כדי לעזור!</p>
         
          <div className="button-container">
                <a href="#contactForm" className="gold-button">ספרו לנו על הפרוייקט שלכם</a>
            </div>
        


          <button className="close-btn" onClick={closeDrawer}>×</button>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
