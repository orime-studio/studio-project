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
      {/* ה-Drawer עצמו */}
      <div className={`side-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-content">
          <h2>
            רוצים להקפיץ את העסק שלכם קדימה?
            </h2>
          <p>השאירו פרטים ונחזור אליכם בהקדם</p>
          
        


          <button className="close-btn" onClick={closeDrawer}>×</button>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
