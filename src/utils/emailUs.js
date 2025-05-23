export async function emailUs(formData) {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error || 'Erreur inconnue');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
