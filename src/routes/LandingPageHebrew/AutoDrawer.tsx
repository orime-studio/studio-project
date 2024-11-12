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
          <h2>תוכן ה-Drawer</h2>
          <p>כאן תוכלו לשים כל תוכן שתרצו</p>
          {/* כפתור סגירה עם סמל X */}
          <button className="close-btn" onClick={closeDrawer}>×</button>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
