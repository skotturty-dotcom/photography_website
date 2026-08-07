import { photographerConfig } from '../config/photographerConfig';

export const getWhatsAppLink = (type = 'general', customData = {}) => {
  const phone = photographerConfig.whatsapp;
  let message = "";

  switch (type) {
    case 'wedding':
      message = `Hi Arjun, I'm interested in wedding photography. My wedding date is ${customData.date || '[DATE]'} and location is ${customData.location || '[LOCATION]'}. Please share your packages and availability.`;
      break;

    case 'pre-wedding':
      message = `Hi Arjun, I'm interested in booking a pre-wedding shoot. Please share your packages and available dates.`;
      break;

    case 'event':
      message = `Hi Arjun, I would like to enquire about event photography for ${customData.eventType || '[EVENT TYPE]'} on ${customData.date || '[DATE]'}.`;
      break;

    case 'portrait':
      message = `Hi Arjun, I'm interested in booking a portrait photography session. Please share details on your session slots and availability.`;
      break;

    case 'package':
      message = `Hi Arjun, I am interested in the "${customData.packageName || 'Signature'}" package for my celebration. Could you please share more details and availability?`;
      break;

    case 'bookingForm':
      message = `Hi Arjun, I submitted an enquiry on your website with the following details:
• Name: ${customData.name || 'N/A'}
• Event: ${customData.eventType || 'N/A'}
• Date: ${customData.date || 'N/A'}
• Location: ${customData.location || 'N/A'}
• Phone: ${customData.phone || 'N/A'}

Looking forward to hearing from you!`;
      break;

    case 'general':
    default:
      message = "Hi Arjun, I found your photography website and would like to know more about your services and availability.";
      break;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};
