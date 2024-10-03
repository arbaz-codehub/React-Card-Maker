export function downloadCard(cardData) {
  const canvas = document.createElement('canvas');
  canvas.width = 1050;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');

  // Set background
  ctx.fillStyle = cardData.backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set text style
  ctx.fillStyle = cardData.textColor;
  ctx.font = `24px ${cardData.font}`;
  ctx.textAlign = 'left';

  // Draw text
  ctx.fillText(cardData.name, 50, 50);
  ctx.fillText(cardData.jobTitle, 50, 90);
  ctx.fillText(cardData.companyName, 50, 130);
  ctx.fillText(cardData.phoneNumber, 50, 200);
  ctx.fillText(cardData.email, 50, 240);
  ctx.fillText(cardData.website, 50, 280);
  ctx.fillText(cardData.address, 50, 320);

  // Create download link
  const link = document.createElement('a');
  link.download = 'business-card.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}