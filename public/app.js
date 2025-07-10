// app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ✅ Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD5iDQEvKR2YZ_03dqbko8haPzhcPzMLM0",
  authDomain: "lenguajes-2.firebaseapp.com",
  projectId: "lenguajes-2",
  storageBucket: "lenguajes-2.firebasestorage.app",
  messagingSenderId: "748298593466",
  appId: "1:748298593466:web:e9c323d19a50386f214e83"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const userCollection = collection(db, "usuarios");

// Elementos del formulario
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const lastnameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const userIdInput = document.getElementById("userId");
const submitBtn = document.getElementById("submitBtn");
const userList = document.getElementById("userList");

// Guardar o actualizar usuario
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = userIdInput.value;
  const nombre = nameInput.value.trim();
  const apellidos = lastnameInput.value.trim();
  const email = emailInput.value.trim();
  const telefono = phoneInput.value.trim();

  try {
    if (id) {
      // Actualizar
      const userRef = doc(db, "usuarios", id);
      await updateDoc(userRef, { nombre, apellidos, email, telefono });
      alert("Usuario actualizado correctamente");
    } else {
      // Crear nuevo
      await addDoc(userCollection, { nombre, apellidos, email, telefono });
      alert("Usuario registrado correctamente");
    }

    form.reset();
    userIdInput.value = "";
    submitBtn.textContent = "Guardar";
    await mostrarUsuarios();
  } catch (error) {
    console.error("Error al guardar:", error);
    alert("Hubo un error al guardar el usuario");
  }
});

// Mostrar usuarios en tabla
async function mostrarUsuarios() {
  userList.innerHTML = "";
  const querySnapshot = await getDocs(userCollection);

  querySnapshot.forEach(docSnap => {
    const data = docSnap.data();
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${data.nombre}</td>
      <td>${data.apellidos}</td>
      <td>${data.email}</td>
      <td>${data.telefono}</td>
      <td>
        <button onclick="editarUsuario('${docSnap.id}', '${data.nombre}', '${data.apellidos}', '${data.email}', '${data.telefono}')">Editar</button>
        <button onclick="eliminarUsuario('${docSnap.id}')">Eliminar</button>
      </td>
    `;

    userList.appendChild(tr);
  });
}

// Editar usuario
window.editarUsuario = (id, nombre, apellidos, email, telefono) => {
  userIdInput.value = id;
  nameInput.value = nombre;
  lastnameInput.value = apellidos;
  emailInput.value = email;
  phoneInput.value = telefono;
  submitBtn.textContent = "Actualizar";
};

// Eliminar usuario con confirmación
window.eliminarUsuario = async (id) => {
  const confirmar = confirm("¿Estás seguro que quieres eliminar este usuario?");
  if (!confirmar) return;

  try {
    await deleteDoc(doc(db, "usuarios", id));
    alert("Usuario eliminado correctamente");
    await mostrarUsuarios();
  } catch (error) {
    console.error("Error al eliminar:", error);
    alert("Hubo un error al eliminar el usuario");
  }
};

// Mostrar usuarios al cargar la página
mostrarUsuarios();