document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.querySelector('#avatar');
  avatar.addEventListener('click', () => {
    const showPhoto = avatar.getAttribute('aria-pressed') !== 'true';
    avatar.setAttribute('aria-pressed', String(showPhoto));
    avatar.innerHTML = showPhoto ? '<img src="img/fernando-garcia.jpeg" alt="">' : 'FG';
    avatar.setAttribute('aria-label', showPhoto ? 'Mostrar mis iniciales' : 'Mostrar mi foto');
  });
  const toggle = document.querySelector('#details-toggle');
  const details = document.querySelector('#project-details');
  toggle.addEventListener('click', () => {
    details.hidden = !details.hidden;
    toggle.setAttribute('aria-expanded', String(!details.hidden));
    toggle.textContent = details.hidden ? 'Ver detalles del proyecto' : 'Ocultar detalles';
  });
  document.querySelector('#contact-form').addEventListener('submit', event => {
    event.preventDefault();
    const name = document.querySelector('#form-name').value.trim();
    const email = document.querySelector('#form-email').value.trim();
    const message = document.querySelector('#form-message').value.trim();
    const status = document.querySelector('#contact-status');
    if (!name || !message) {
      status.textContent = 'Escribe tu nombre y un mensaje.';
      return;
    }
    const subject = encodeURIComponent('Contacto desde el portafolio: ' + name);
    const body = encodeURIComponent('Nombre: ' + name + '\nCorreo: ' + email + '\n\n' + message);
    status.textContent = 'Correo preparado. Completa el envío en tu aplicación de correo.';
    window.location.href = 'mailto:saitamfer2@gmail.com?subject=' + subject + '&body=' + body;
  });
});
