export const openWhatsApp = (message: string, phone: string = '556791471070') => {
  const encodedMessage = encodeURIComponent(message);
  
  // Detecta o tipo de dispositivo
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);
  
  // Lista de URLs para tentar em ordem de prioridade
  const urls: string[] = [];
  
  if (isMobile) {
    if (isIOS) {
      // Para iOS: tenta o esquema nativo primeiro
      urls.push(`whatsapp://send?phone=${phone}&text=${encodedMessage}`);
      urls.push(`https://wa.me/${phone}?text=${encodedMessage}`);
      urls.push(`https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`);
    } else if (isAndroid) {
      // Para Android: usa intent primeiro
      urls.push(`intent://send?phone=${phone}&text=${encodedMessage}#Intent;scheme=whatsapp;package=com.whatsapp;end;`);
      urls.push(`whatsapp://send?phone=${phone}&text=${encodedMessage}`);
      urls.push(`https://wa.me/${phone}?text=${encodedMessage}`);
    } else {
      // Outros mobiles
      urls.push(`whatsapp://send?phone=${phone}&text=${encodedMessage}`);
      urls.push(`https://wa.me/${phone}?text=${encodedMessage}`);
    }
  } else {
    // Para desktop: prioriza WhatsApp Web
    urls.push(`https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`);
    urls.push(`https://wa.me/${phone}?text=${encodedMessage}`);
    urls.push(`https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`);
  }
  
  // Função para tentar abrir cada URL
  const tryOpenUrl = (urlIndex: number = 0) => {
    if (urlIndex >= urls.length) {
      // Se todas falharam, abre o último como fallback
      window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
      return;
    }
    
    const url = urls[urlIndex];
    const newWindow = window.open(url, '_blank');
    
    // Para mobile, verifica se conseguiu abrir
    if (isMobile) {
      // Espera um pouco e verifica se a janela foi fechada (indicando que o app abriu)
      setTimeout(() => {
        if (newWindow && !newWindow.closed) {
          newWindow.close();
          // Se não abriu o app, tenta a próxima URL
          tryOpenUrl(urlIndex + 1);
        }
      }, 1000);
    }
  };
  
  // Inicia o processo
  tryOpenUrl();
};

// Função específica para abrir com mensagens pré-definidas
export const openWhatsAppWithPredefinedMessage = (messageType: 'contact' | 'quote' | 'question') => {
  const messages = {
    contact: 'Olá Lincon, como contratar um seguro de carro ou moto?',
    quote: 'Olá Lincon, gostaria de solicitar uma cotação de seguro.',
    question: 'Olá Lincon, gostaria de tirar dúvidas sobre seguros.'
  };
  
  openWhatsApp(messages[messageType]);
};
