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

/* export async function getItemsById(id) {
    const request = await fetch(http:/localhost:)
    const items = await request.json();
    return items;
} */
