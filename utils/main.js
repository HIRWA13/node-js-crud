document
  .querySelector(".task-container")
  .addEventListener("click", async function (e) {
    if (e.target.matches(".delete")) {
      e.preventDefault();
      const docId = e.target.getAttribute("data-doc");
      const res = await fetch(`/items/${docId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        window.location.reload();
      }
    }
    if (e.target.matches(".done")) {
      e.preventDefault();
      const docId = e.target.getAttribute("data-doc");
      const res = await fetch(`/items/${docId}`, {
        method: "PATCH",
      });
      const data = await res.json();
      if (res.ok) {
        window.location.reload();
      }
    }
  });
