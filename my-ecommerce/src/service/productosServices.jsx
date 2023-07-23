export async function getBlog() {
  const request = await fetch("http://localhost:8080/blog/obtener");
  const items = await request.json();
  {
    next: {
      revalidate: 3600;
    }
  }

  return items;
}

export async function postBlog(blogData) {
  const request = await fetch("http://localhost:8080/blog/nuevo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });
}

export async function getProductos() {
  const request = await fetch("http://localhost:8080/producto/lista");
  const items = await request.json();
  {
    next: {
      revalidate: 3600;
    }
  }

  return items;
}

export async function getItemsById(id) {
  const request = await fetch(`http://localhost:8080/producto/obtener/${id}`);
  const items = await request.json();
  return items;
}

export async function postCliente(clienteData) {
  const request = await fetch("http://localhost:8080/Cliente/nuevo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(clienteData),
  });
}
