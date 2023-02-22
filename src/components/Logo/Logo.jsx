import { useEffect } from 'react';
import css from'./Logo.module.css'

export const Logo = () => {
  useEffect(() => {
    try {

      const logoTextRef = document.querySelector('#logo>h1');
      const logoText=logoTextRef.textContent
      const stepAngle=12;
      const startWritingAnglePosition=-logoText.length*stepAngle/2
      logoTextRef.innerHTML = logoText.replace(
        /\S/g,
        '<span>$&</span>'
      );

      let element = document.querySelectorAll('#logo>h1 span');
      for (let i = 0; i < element.length; i++) {
        element[i].style.transform = `rotate(${startWritingAnglePosition + i * stepAngle}deg)`;
      }
    } catch {}
  }, []);

  return (
    <div id='logo' className={css.logo}>
      <h1>Phonebook</h1>
    </div>
  );
};
