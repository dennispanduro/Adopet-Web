// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD5iDQEvKR2YZ_03dqbko8haPzhcPzMLM0",
  authDomain: "lenguajes-2.firebaseapp.com",
  projectId: "lenguajes-2",
  storageBucket: "lenguajes-2.firebasestorage.app",
  messagingSenderId: "748298593466",
  appId: "1:748298593466:web:e9c323d19a50386f214e83"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ✅ Detectar sesión activa y ocultar/mostrar botones del nav
window.addEventListener("DOMContentLoaded", () => {
  const registro = document.getElementById("registro-link");
  const login = document.getElementById("login-link");
  const logoutBtn = document.getElementById("logout-btn"); // 🔸 nuevo

  auth.onAuthStateChanged(user => {
    if (user) {
      // ✅ Usuario logueado → ocultar login/registro y mostrar logout
      registro?.classList.add("hidden");
      login?.classList.add("hidden");
      logoutBtn?.classList.remove("hidden"); // 🔸 mostrar botón cerrar sesión
    } else {
      // ❌ No logueado → mostrar login/registro y ocultar logout
      registro?.classList.remove("hidden");
      login?.classList.remove("hidden");
      logoutBtn?.classList.add("hidden"); // 🔸 ocultar botón cerrar sesión
    }
  });

  // 🔸 Evento para cerrar sesión
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      auth.signOut()
        .then(() => {
          console.log("Sesión cerrada");
        })
        .catch((error) => {
          console.error("Error al cerrar sesión:", error);
        });
    });
  }
});

// Registrar usuario
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (password.length < 6) {
    showMessage("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  if (!/[A-Z]/.test(password)) {
    showMessage("La contraseña debe tener al menos una letra mayúscula.");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => showMessage("Registro exitoso ✅"))
    .catch(e => showMessage("Error: " + e.message));
}

// Iniciar sesión
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      showMessage("Inicio de sesión exitoso ✅");
      // ✅ Redirigir a página principal
      window.location.href = "../index.html";
    })
    .catch(e => {
      showMessage("Error: " + e.message);
      console.error(e);
    });
}

// Mostrar mensajes
function showMessage(text) {
  const messageElement = document.getElementById("message");
  if (messageElement) {
    messageElement.innerText = text;
  }
}