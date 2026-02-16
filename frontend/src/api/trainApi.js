export const searchTrainsAPI = async ({ from, to }) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/trains?from=${from}&to=${to}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch trains");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching trains:", error);
    return [];
  }
};
