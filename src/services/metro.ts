"use server";

const toFormData = (object: any) => {
  const formData = new FormData();
  for (const [key, datum] of Object.entries(object)) {
    formData.append(key, datum);
  }
  return formData;
};

export const getSchedule = (schedule: any) => {
  const data = toFormData({
    action: "formularios_ajax",
    data: new URLSearchParams({
      auth_token: "c165089c1a4095b8630f0dc4f1a3dc6a",
      action: "horarios-ruta",
      ...schedule,
    }),
  });

  return fetch(
    "https://www.metrovalencia.es/wp-content/themes/metrovalencia/functions/ajax-no-wp.php",
    {
      method: "POST",
      body: data,
    }
  ).then((response) => response.json());
};
