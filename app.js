/* ── Config ── */
const FORMSPREE_ID = 'mzdqzlyl';
const WA_NUMBER = '5215661422790';
const FORM_URL = window.location.href.split('?')[0];
const TOTAL_SECTIONS = 6;

/* ── State ── */
let lang = 'es';
let sendLang = 'es';
let channel = null;

const state = {
  rubro: null,
  objetivo: [],
  estilo: null,
  colores: [],
  material: [],
  funciones: [],
  presupuesto: null,
  urgencia: null
};

/* ── Translations ── */
const T = {
  es: {
    headerTitle: 'Cuéntame sobre tu sitio web',
    headerSub: 'Toma 3 minutos · Fácil y rápido',
    progLabel: (d, t) => `${d} de ${t} secciones completadas`,
    s1: 'Tu información', s2: 'Tu negocio', s3: 'Objetivo del sitio',
    s4: 'Estilo visual', s5: 'Materiales disponibles', s6: 'Funcionalidades',
    s7: 'Presupuesto y tiempo', s8: 'Para terminar',
    q0: '¿Cuál es tu nombre?', q0b: '¿Cuál es el nombre de tu negocio?',
    q2: '¿A qué se dedica tu negocio?',
    q3: '¿Para qué quieres el sitio? (puedes elegir varios)',
    q4: '¿Hay algún sitio web que te guste o te inspire?',
    q5: '¿Cómo quieres que se vea tu sitio?',
    q6: '¿Tienes colores favoritos para tu sitio? (elige máximo 2)',
    q7: '¿Con qué materiales ya cuentas?',
    q8: '¿Qué necesitas que haga tu sitio?',
    q9: '¿Cuánto tienes pensado invertir?',
    q10: '¿Para cuándo necesitas el sitio?',
    q11: 'Con tus propias palabras, ¿qué imaginas para tu sitio?',
    nombrePlaceholder: 'Nombre y apellido',
    negocioPlaceholder: 'Nombre del negocio',
    referenciasPlaceholder: 'https://... (opcional)',
    descripcionPlaceholder: 'Cuéntame lo que sea: ideas, inspiraciones, lo que quieres que sienta quien lo visita...',
    otroPH: 'Describe brevemente tu negocio...',
    r1: 'Restaurante / Café', r1s: 'Comida, bebidas, catering',
    r2: 'Salud & Belleza', r2s: 'Salón, spa, clínica, terapia',
    r3: 'Moda / Ropa', r3s: 'Ropa, accesorios, tienda',
    r4: 'Servicios profesionales', r4s: 'Consultoría, legal, contable',
    r5: 'Educación', r5s: 'Academia, cursos, coaching',
    r6: 'Inmobiliaria', r6s: 'Renta, venta, propiedades',
    r7: 'Otro', r7s: 'Mi negocio es diferente',
    o1: 'Tener presencia en internet', o2: 'Vender productos',
    o3: 'Que los clientes me contacten', o4: 'Recibir citas / reservaciones',
    o5: 'Mostrar mi trabajo', o6: 'Informar sobre mis servicios',
    e1: 'Moderno y limpio', e1s: 'Minimalista, elegante',
    e2: 'Elegante / Lujoso', e2s: 'Sofisticado, premium',
    e3: 'Colorido y divertido', e3s: 'Alegre, vibrante',
    e4: 'Natural / Orgánico', e4s: 'Fresco, natural, eco',
    e5: 'Formal / Profesional', e5s: 'Serio, corporativo',
    e6: 'Vintage / Retro', e6s: 'Clásico, nostálgico',
    m1: 'Logo', m2: 'Fotos profesionales', m3: 'Fotos de celular',
    m4: 'Videos', m5: 'Textos / descripciones', m6: 'Redes sociales activas', m7: 'No tengo nada aún',
    f1: 'Galería de fotos', f2: 'Formulario de contacto', f3: 'Botón de WhatsApp',
    f4: 'Mapa y ubicación', f5: 'Reservas / citas', f6: 'Tienda en línea',
    f7: 'Blog / noticias', f8: 'Más de un idioma',
    p1: 'Menos de $500 USD', p1s: 'Proyecto pequeño',
    p2: '$500 – $1,500 USD', p2s: 'Proyecto estándar',
    p3: '$1,500 – $3,000 USD', p3s: 'Proyecto completo',
    p4: 'No lo tengo claro', p4s: 'Ver opciones primero',
    u1: 'Lo antes posible', u2: 'En 1 mes', u3: 'Sin prisa / flexible',
    submitBtn: 'Enviar respuestas', submitSending: 'Enviando...',
    tyTitle: '¡Listo, gracias!',
    tySub: 'Recibí tus respuestas y te contacto pronto con una propuesta.',
    sendTitle: 'Compartir con tu cliente',
    sendSub: 'Elige el idioma y el canal para enviar el link',
    waMsg: 'Hola 👋 Te comparto este formulario para que me cuentes qué buscas en tu sitio web. Solo toma 3 minutos y me ayuda mucho para prepararte una propuesta personalizada 😊\n\n',
    emailSubj: 'Cuéntame sobre tu sitio web',
    emailBody: 'Hola,\n\nTe comparto este breve formulario para que me cuentes qué buscas en tu nuevo sitio web. Solo toma unos minutos y me ayudará a prepararte una propuesta personalizada.\n\n',
    copyBtn: 'Copiar mensaje', copied: 'Copiado ✓',
    openWa: 'Abrir WhatsApp', openEmail: 'Abrir correo',
    alertNombre: 'Por favor ingresa tu nombre.',
    alertNegocio: 'Por favor ingresa el nombre de tu negocio.',
    alertDescripcion: 'Por favor cuéntanos qué imaginas para tu sitio.',
    labelMap: { rubro: 'Rubro', objetivo: 'Objetivo', estilo: 'Estilo', colores: 'Colores', material: 'Material', funciones: 'Funciones', presupuesto: 'Presupuesto', urgencia: 'Tiempo', descripcion: 'Descripción', referencia: 'Referencia', negocio: 'Negocio', otroRubro: 'Rubro (detalle)' }
  },
  en: {
    headerTitle: 'Tell me about your website',
    headerSub: 'Takes 3 minutes · Easy and quick',
    progLabel: (d, t) => `${d} of ${t} sections completed`,
    s1: 'Your information', s2: 'Your business', s3: 'Website goal',
    s4: 'Visual style', s5: 'Available materials', s6: 'Features',
    s7: 'Budget & timeline', s8: 'Almost done',
    q0: 'What is your name?', q0b: 'What is the name of your business?',
    q2: 'What does your business do?',
    q3: 'What do you want the site for? (pick several)',
    q4: 'Is there a website you like or find inspiring?',
    q5: 'How do you want your site to look?',
    q6: 'Do you have favorite colors for your site? (pick up to 2)',
    q7: 'What materials do you already have?',
    q8: 'What do you need your site to do?',
    q9: 'How much are you thinking of investing?',
    q10: 'When do you need the site?',
    q11: 'In your own words, what do you imagine for your site?',
    nombrePlaceholder: 'First and last name',
    negocioPlaceholder: 'Business name',
    referenciasPlaceholder: 'https://... (optional)',
    descripcionPlaceholder: 'Tell me anything: ideas, inspiration, how you want visitors to feel...',
    otroPH: 'Briefly describe your business...',
    r1: 'Restaurant / Café', r1s: 'Food, drinks, catering',
    r2: 'Health & Beauty', r2s: 'Salon, spa, clinic, therapy',
    r3: 'Fashion / Clothing', r3s: 'Clothing, accessories, shop',
    r4: 'Professional services', r4s: 'Consulting, legal, accounting',
    r5: 'Education', r5s: 'Academy, courses, coaching',
    r6: 'Real estate', r6s: 'Rental, sales, properties',
    r7: 'Other', r7s: 'My business is different',
    o1: 'Have an online presence', o2: 'Sell products',
    o3: 'Get clients to contact me', o4: 'Receive appointments / bookings',
    o5: 'Show my work', o6: 'Inform about my services',
    e1: 'Modern & clean', e1s: 'Minimalist, elegant',
    e2: 'Elegant / Luxury', e2s: 'Sophisticated, premium',
    e3: 'Colorful & fun', e3s: 'Cheerful, vibrant',
    e4: 'Natural / Organic', e4s: 'Fresh, natural, eco',
    e5: 'Formal / Professional', e5s: 'Serious, corporate',
    e6: 'Vintage / Retro', e6s: 'Classic, nostalgic',
    m1: 'Logo', m2: 'Professional photos', m3: 'Phone photos',
    m4: 'Videos', m5: 'Written text / descriptions', m6: 'Active social media', m7: 'I have nothing yet',
    f1: 'Photo gallery', f2: 'Contact form', f3: 'WhatsApp button',
    f4: 'Map & location', f5: 'Reservations / appointments', f6: 'Online store',
    f7: 'Blog / news', f8: 'Multiple languages',
    p1: 'Less than $500 USD', p1s: 'Small project',
    p2: '$500 – $1,500 USD', p2s: 'Standard project',
    p3: '$1,500 – $3,000 USD', p3s: 'Full project',
    p4: 'Not sure yet', p4s: "I'd prefer to see options first",
    u1: 'As soon as possible', u2: 'Within 1 month', u3: 'No rush / flexible',
    submitBtn: 'Send my answers', submitSending: 'Sending...',
    tyTitle: 'Done, thank you!',
    tySub: 'I received your answers and will reach out soon with a proposal.',
    sendTitle: 'Share with your client',
    sendSub: 'Choose the language and channel to send the link',
    waMsg: "Hi 👋 I'm sharing this quick form so you can tell me what you're looking for in your website. It only takes 3 minutes and helps me put together a personalized proposal 😊\n\n",
    emailSubj: 'Tell me about your website',
    emailBody: "Hi,\n\nI'm sharing this short form so you can tell me what you're looking for in your new website. It only takes a few minutes and will help me prepare a personalized proposal.\n\n",
    copyBtn: 'Copy message', copied: 'Copied ✓',
    openWa: 'Open WhatsApp', openEmail: 'Open email',
    alertNombre: 'Please enter your name.',
    alertNegocio: 'Please enter your business name.',
    alertDescripcion: 'Please tell us what you imagine for your site.',
    labelMap: { rubro: 'Industry', objetivo: 'Goal', estilo: 'Style', colores: 'Colors', material: 'Materials', funciones: 'Features', presupuesto: 'Budget', urgencia: 'Timeline', descripcion: 'Description', referencia: 'Reference', negocio: 'Business', otroRubro: 'Industry (detail)' }
  },
  pt: {
    headerTitle: 'Me conta sobre o seu site',
    headerSub: 'Leva 3 minutos · Fácil e rápido',
    progLabel: (d, t) => `${d} de ${t} seções concluídas`,
    s1: 'Suas informações', s2: 'Seu negócio', s3: 'Objetivo do site',
    s4: 'Estilo visual', s5: 'Materiais disponíveis', s6: 'Funcionalidades',
    s7: 'Orçamento e prazo', s8: 'Quase lá',
    q0: 'Qual é o seu nome?', q0b: 'Qual é o nome do seu negócio?',
    q2: 'O que o seu negócio faz?',
    q3: 'Para que você quer o site? (pode escolher vários)',
    q4: 'Tem algum site que você gosta ou que te inspira?',
    q5: 'Como você quer que seu site pareça?',
    q6: 'Tem cores favoritas para o seu site? (escolha até 2)',
    q7: 'Que materiais você já tem?',
    q8: 'O que você precisa que o site faça?',
    q9: 'Quanto você pensa em investir?',
    q10: 'Quando você precisa do site?',
    q11: 'Com suas próprias palavras, o que você imagina para o seu site?',
    nombrePlaceholder: 'Nome e sobrenome',
    negocioPlaceholder: 'Nome do negócio',
    referenciasPlaceholder: 'https://... (opcional)',
    descripcionPlaceholder: 'Me conta qualquer coisa: ideias, inspirações, como você quer que os visitantes se sintam...',
    otroPH: 'Descreva brevemente o seu negócio...',
    r1: 'Restaurante / Café', r1s: 'Comida, bebidas, catering',
    r2: 'Saúde & Beleza', r2s: 'Salão, spa, clínica, terapia',
    r3: 'Moda / Roupas', r3s: 'Roupas, acessórios, loja',
    r4: 'Serviços profissionais', r4s: 'Consultoria, jurídico, contabilidade',
    r5: 'Educação', r5s: 'Academia, cursos, coaching',
    r6: 'Imobiliária', r6s: 'Aluguel, venda, propriedades',
    r7: 'Outro', r7s: 'Meu negócio é diferente',
    o1: 'Ter presença na internet', o2: 'Vender produtos',
    o3: 'Que os clientes me contactem', o4: 'Receber consultas / reservas',
    o5: 'Mostrar meu trabalho', o6: 'Informar sobre meus serviços',
    e1: 'Moderno e limpo', e1s: 'Minimalista, elegante',
    e2: 'Elegante / Luxuoso', e2s: 'Sofisticado, premium',
    e3: 'Colorido e divertido', e3s: 'Alegre, vibrante',
    e4: 'Natural / Orgânico', e4s: 'Fresco, natural, eco',
    e5: 'Formal / Profissional', e5s: 'Sério, corporativo',
    e6: 'Vintage / Retrô', e6s: 'Clássico, nostálgico',
    m1: 'Logo', m2: 'Fotos profissionais', m3: 'Fotos de celular',
    m4: 'Vídeos', m5: 'Textos / descrições', m6: 'Redes sociais ativas', m7: 'Ainda não tenho nada',
    f1: 'Galeria de fotos', f2: 'Formulário de contato', f3: 'Botão do WhatsApp',
    f4: 'Mapa e localização', f5: 'Reservas / consultas', f6: 'Loja online',
    f7: 'Blog / notícias', f8: 'Mais de um idioma',
    p1: 'Menos de $500 USD', p1s: 'Projeto pequeno',
    p2: '$500 – $1.500 USD', p2s: 'Projeto padrão',
    p3: '$1.500 – $3.000 USD', p3s: 'Projeto completo',
    p4: 'Ainda não sei', p4s: 'Prefiro ver as opções primeiro',
    u1: 'O mais rápido possível', u2: 'Em 1 mês', u3: 'Sem pressa / flexível',
    submitBtn: 'Enviar respostas', submitSending: 'Enviando...',
    tyTitle: 'Pronto, obrigado!',
    tySub: 'Recebi suas respostas e entrarei em contato em breve com uma proposta.',
    sendTitle: 'Compartilhar com seu cliente',
    sendSub: 'Escolha o idioma e o canal para enviar o link',
    waMsg: 'Oi 👋 Estou te mandando este formulário para você me contar o que está procurando no seu site. Leva só 3 minutos e me ajuda muito a preparar uma proposta pra você 😊\n\n',
    emailSubj: 'Me conta sobre o seu site',
    emailBody: 'Olá,\n\nEstou compartilhando este formulário rápido para você me contar o que está procurando no seu novo site. Leva apenas alguns minutos e vai me ajudar a preparar uma proposta personalizada.\n\n',
    copyBtn: 'Copiar mensagem', copied: 'Copiado ✓',
    openWa: 'Abrir WhatsApp', openEmail: 'Abrir e-mail',
    alertNombre: 'Por favor insira seu nome.',
    alertNegocio: 'Por favor insira o nome do seu negócio.',
    alertDescripcion: 'Por favor nos conte o que você imagina para o seu site.',
    labelMap: { rubro: 'Setor', objetivo: 'Objetivo', estilo: 'Estilo', colores: 'Cores', material: 'Materiais', funciones: 'Funcionalidades', presupuesto: 'Orçamento', urgencia: 'Prazo', descripcion: 'Descrição', referencia: 'Referência', negocio: 'Negócio', otroRubro: 'Setor (detalhe)' }
  }
};

/* ── Value labels (for Formspree submission) ── */
const valueLabels = {
  restaurante: { es: 'Restaurante / Café', en: 'Restaurant / Café', pt: 'Restaurante / Café' },
  belleza: { es: 'Salud & Belleza', en: 'Health & Beauty', pt: 'Saúde & Beleza' },
  moda: { es: 'Moda / Ropa', en: 'Fashion / Clothing', pt: 'Moda / Roupas' },
  servicios: { es: 'Servicios profesionales', en: 'Professional services', pt: 'Serviços profissionais' },
  educacion: { es: 'Educación', en: 'Education', pt: 'Educação' },
  inmobiliaria: { es: 'Inmobiliaria', en: 'Real estate', pt: 'Imobiliária' },
  otro: { es: 'Otro', en: 'Other', pt: 'Outro' },
  presencia: { es: 'Tener presencia en internet', en: 'Have an online presence', pt: 'Ter presença na internet' },
  vender: { es: 'Vender productos', en: 'Sell products', pt: 'Vender produtos' },
  contacto: { es: 'Que los clientes me contacten', en: 'Get clients to contact me', pt: 'Que os clientes me contactem' },
  citas: { es: 'Recibir citas / reservaciones', en: 'Receive appointments', pt: 'Receber consultas / reservas' },
  portfolio: { es: 'Mostrar mi trabajo', en: 'Show my work', pt: 'Mostrar meu trabalho' },
  informar: { es: 'Informar sobre mis servicios', en: 'Inform about my services', pt: 'Informar sobre meus serviços' },
  moderno: { es: 'Moderno y limpio', en: 'Modern & clean', pt: 'Moderno e limpo' },
  lujoso: { es: 'Elegante / Lujoso', en: 'Elegant / Luxury', pt: 'Elegante / Luxuoso' },
  colorido: { es: 'Colorido y divertido', en: 'Colorful & fun', pt: 'Colorido e divertido' },
  natural: { es: 'Natural / Orgánico', en: 'Natural / Organic', pt: 'Natural / Orgânico' },
  formal: { es: 'Formal / Profesional', en: 'Formal / Professional', pt: 'Formal / Profissional' },
  vintage: { es: 'Vintage / Retro', en: 'Vintage / Retro', pt: 'Vintage / Retrô' },
  negro: { es: 'Negro', en: 'Black', pt: 'Preto' },
  blanco: { es: 'Blanco / Beige', en: 'White / Beige', pt: 'Branco / Bege' },
  azul: { es: 'Azul', en: 'Blue', pt: 'Azul' },
  verde: { es: 'Verde', en: 'Green', pt: 'Verde' },
  naranja: { es: 'Rojo / Naranja', en: 'Red / Orange', pt: 'Vermelho / Laranja' },
  rosa: { es: 'Rosa', en: 'Pink', pt: 'Rosa' },
  morado: { es: 'Morado', en: 'Purple', pt: 'Roxo' },
  dorado: { es: 'Dorado', en: 'Gold', pt: 'Dourado' },
  logo: { es: 'Logo', en: 'Logo', pt: 'Logo' },
  fotos_pro: { es: 'Fotos profesionales', en: 'Professional photos', pt: 'Fotos profissionais' },
  fotos_cel: { es: 'Fotos de celular', en: 'Phone photos', pt: 'Fotos de celular' },
  videos: { es: 'Videos', en: 'Videos', pt: 'Vídeos' },
  textos: { es: 'Textos / descripciones', en: 'Written text', pt: 'Textos / descrições' },
  redes: { es: 'Redes sociales activas', en: 'Active social media', pt: 'Redes sociais ativas' },
  nada: { es: 'No tengo nada aún', en: 'Nothing yet', pt: 'Ainda não tenho nada' },
  galeria: { es: 'Galería de fotos', en: 'Photo gallery', pt: 'Galeria de fotos' },
  whatsapp: { es: 'Botón de WhatsApp', en: 'WhatsApp button', pt: 'Botão do WhatsApp' },
  mapa: { es: 'Mapa y ubicación', en: 'Map & location', pt: 'Mapa e localização' },
  tienda: { es: 'Tienda en línea', en: 'Online store', pt: 'Loja online' },
  blog: { es: 'Blog / noticias', en: 'Blog / news', pt: 'Blog / notícias' },
  idiomas: { es: 'Más de un idioma', en: 'Multiple languages', pt: 'Mais de um idioma' },
  menos500: { es: 'Menos de $500 USD', en: 'Less than $500 USD', pt: 'Menos de $500 USD' },
  '500_1500': { es: '$500 – $1,500 USD', en: '$500 – $1,500 USD', pt: '$500 – $1.500 USD' },
  '1500_3000': { es: '$1,500 – $3,000 USD', en: '$1,500 – $3,000 USD', pt: '$1.500 – $3.000 USD' },
  no_se: { es: 'No lo tengo claro', en: 'Not sure yet', pt: 'Ainda não sei' },
  urgente: { es: 'Lo antes posible', en: 'ASAP', pt: 'O mais rápido possível' },
  '1mes': { es: 'En 1 mes', en: 'Within 1 month', pt: 'Em 1 mês' },
  sinprisa: { es: 'Sin prisa / flexible', en: 'No rush / flexible', pt: 'Sem pressa / flexível' }
};

function getLabel(v, l) {
  return valueLabels[v] ? (valueLabels[v][l] || v) : v;
}

/* ── Language switching ── */
function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach((b, i) => {
    b.classList.toggle('active', ['es', 'en', 'pt'][i] === l);
  });
  const t = T[l];
  document.getElementById('header-title').textContent = t.headerTitle;
  document.getElementById('header-sub').textContent = t.headerSub;
  document.getElementById('submit-label').textContent = t.submitBtn;
  document.getElementById('ty-title').textContent = t.tyTitle;
  document.getElementById('ty-sub').textContent = t.tySub;
  document.getElementById('send-title').textContent = t.sendTitle;
  document.getElementById('send-sub').textContent = t.sendSub;
  document.getElementById('input-nombre').placeholder = t.nombrePlaceholder;
  document.getElementById('input-negocio').placeholder = t.negocioPlaceholder;
  document.getElementById('input-referencia').placeholder = t.referenciasPlaceholder;
  document.getElementById('input-descripcion').placeholder = t.descripcionPlaceholder;
  document.getElementById('input-otro').placeholder = t.otroPH;

  const domMap = {
    'lbl-s1': 's1', 'lbl-s2': 's2', 'lbl-s3': 's3', 'lbl-s4': 's4',
    'lbl-s5': 's5', 'lbl-s6': 's6', 'lbl-s7': 's7', 'lbl-s8': 's8',
    'q0': 'q0', 'q0b': 'q0b', 'q2': 'q2', 'q3': 'q3', 'q4': 'q4',
    'q5': 'q5', 'q6': 'q6', 'q7': 'q7', 'q8': 'q8', 'q9': 'q9', 'q10': 'q10', 'q11': 'q11',
    'r1': 'r1', 'r1s': 'r1s', 'r2': 'r2', 'r2s': 'r2s', 'r3': 'r3', 'r3s': 'r3s',
    'r4': 'r4', 'r4s': 'r4s', 'r5': 'r5', 'r5s': 'r5s', 'r6': 'r6', 'r6s': 'r6s', 'r7': 'r7', 'r7s': 'r7s',
    'o1': 'o1', 'o2': 'o2', 'o3': 'o3', 'o4': 'o4', 'o5': 'o5', 'o6': 'o6',
    'e1': 'e1', 'e1s': 'e1s', 'e2': 'e2', 'e2s': 'e2s', 'e3': 'e3', 'e3s': 'e3s',
    'e4': 'e4', 'e4s': 'e4s', 'e5': 'e5', 'e5s': 'e5s', 'e6': 'e6', 'e6s': 'e6s',
    'm1': 'm1', 'm2': 'm2', 'm3': 'm3', 'm4': 'm4', 'm5': 'm5', 'm6': 'm6', 'm7': 'm7',
    'f1': 'f1', 'f2': 'f2', 'f3': 'f3', 'f4': 'f4', 'f5': 'f5', 'f6': 'f6', 'f7': 'f7', 'f8': 'f8',
    'p1': 'p1', 'p1s': 'p1s', 'p2': 'p2', 'p2s': 'p2s', 'p3': 'p3', 'p3s': 'p3s', 'p4': 'p4', 'p4s': 'p4s',
    'u1': 'u1', 'u2': 'u2', 'u3': 'u3'
  };

  Object.entries(domMap).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && t[key] !== undefined) el.textContent = t[key];
  });

  updateProgress();
  if (channel) renderShareBox();
}

/* ── Selection handlers ── */
function pick(btn, group) {
  document.querySelectorAll('[data-g="' + group + '"]').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state[group] = btn.dataset.v;
  if (group === 'rubro') {
    document.getElementById('otro-box').style.display = btn.dataset.v === 'otro' ? 'block' : 'none';
  }
  updateProgress();
}

function pickMulti(btn, group) {
  btn.classList.toggle('selected');
  const v = btn.dataset.v;
  if (btn.classList.contains('selected')) {
    if (!state[group].includes(v)) state[group].push(v);
  } else {
    state[group] = state[group].filter(x => x !== v);
  }
  updateProgress();
}

function pickColor(el) {
  const v = el.dataset.v;
  if (el.classList.contains('selected')) {
    el.classList.remove('selected');
    state.colores = state.colores.filter(x => x !== v);
    return;
  }
  if (state.colores.length >= 2) return;
  el.classList.add('selected');
  state.colores.push(v);
}

/* ── Progress ── */
function updateProgress() {
  const checks = [
    document.getElementById('input-nombre').value.trim() !== '' &&
    document.getElementById('input-negocio').value.trim() !== '',
    state.rubro !== null,
    state.objetivo.length > 0,
    state.estilo !== null,
    state.material.length > 0,
    state.funciones.length > 0
  ];
  const done = checks.filter(Boolean).length;
  document.getElementById('progress').style.width = Math.round((done / TOTAL_SECTIONS) * 100) + '%';
  document.getElementById('prog-label').textContent = T[lang].progLabel(done, TOTAL_SECTIONS);
}

function updateCharCount(el, countId) {
  document.getElementById(countId).textContent = el.value.length;
  updateProgress();
}

/* ── Form submission ── */
async function submitForm() {
  const btn = document.getElementById('submit-btn');
  const lbl = document.getElementById('submit-label');
  const t = T[lang];
  const nombre = document.getElementById('input-nombre').value.trim();
  const negocio = document.getElementById('input-negocio').value.trim();
  const descripcion = document.getElementById('input-descripcion').value.trim();
  const otroRubro = document.getElementById('input-otro').value.trim();
  const referencia = document.getElementById('input-referencia').value.trim();

  if (!nombre) { alert(t.alertNombre); return; }
  if (!negocio) { alert(t.alertNegocio); return; }
  if (!descripcion) { alert(t.alertDescripcion); return; }

  lbl.textContent = t.submitSending;
  btn.style.opacity = '0.6';
  btn.disabled = true;

  const lm = t.labelMap;
  const formData = new FormData();
  formData.append('_subject', 'Nuevo brief de sitio web — ' + nombre);
  formData.append('Nombre', nombre);
  formData.append(lm.negocio, negocio);
  if (state.rubro) formData.append(lm.rubro, getLabel(state.rubro, lang));
  if (otroRubro) formData.append(lm.otroRubro, otroRubro);
  if (state.objetivo.length) formData.append(lm.objetivo, state.objetivo.map(v => getLabel(v, lang)).join(', '));
  if (referencia) formData.append(lm.referencia, referencia);
  if (state.estilo) formData.append(lm.estilo, getLabel(state.estilo, lang));
  if (state.colores.length) formData.append(lm.colores, state.colores.map(v => getLabel(v, lang)).join(', '));
  if (state.material.length) formData.append(lm.material, state.material.map(v => getLabel(v, lang)).join(', '));
  if (state.funciones.length) formData.append(lm.funciones, state.funciones.map(v => getLabel(v, lang)).join(', '));
  if (state.presupuesto) formData.append(lm.presupuesto, getLabel(state.presupuesto, lang));
  if (state.urgencia) formData.append(lm.urgencia, getLabel(state.urgencia, lang));
  formData.append(lm.descripcion, descripcion);
  formData.append('_language', lang);

  try {
    const res = await fetch('https://formspree.io/f/' + FORMSPREE_ID, {
      method: 'POST', body: formData, headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      document.getElementById('main-form').style.display = 'none';
      document.getElementById('thankyou').classList.add('show');
    } else throw new Error();
  } catch (e) {
    lbl.textContent = t.submitBtn;
    btn.style.opacity = '1';
    btn.disabled = false;
    alert('Hubo un error al enviar. Por favor intenta de nuevo.');
  }
}

/* ── Share section ── */
function setSendLang(l) {
  sendLang = l;
  ['es', 'en', 'pt'].forEach(x => document.getElementById('sl-' + x).classList.toggle('selected', x === l));
  if (channel) renderShareBox();
}

function setChannel(ch) {
  channel = ch;
  document.getElementById('ch-wa').classList.toggle('selected', ch === 'whatsapp');
  document.getElementById('ch-em').classList.toggle('selected', ch === 'email');
  renderShareBox();
}

function buildLink() {
  const url = new URL(FORM_URL);
  url.searchParams.set('lang', sendLang);
  return url.toString();
}

function renderShareBox() {
  const t = T[sendLang], link = buildLink(), box = document.getElementById('share-box');
  box.classList.add('show');
  if (channel === 'whatsapp') {
    const fullMsg = t.waMsg + link, encoded = encodeURIComponent(fullMsg);
    box.innerHTML = `<strong>${t.waMsg.split('\n')[0]}</strong>${t.waMsg.replace(/\n/g, '<br>')}<span class="link-text">${link}</span><div class="action-row"><button class="action-btn" id="copy-wa-btn" onclick="copyText('${encoded}','copy-wa-btn','${t.copied}','${t.copyBtn}')">${t.copyBtn}</button><a href="https://api.whatsapp.com/send?phone=${WA_NUMBER}&text=${encoded}" target="_blank" style="flex:1;text-decoration:none"><button class="action-btn wa" style="width:100%">${t.openWa}</button></a></div>`;
  } else {
    const fullBody = t.emailBody + link;
    const mailto = `mailto:?subject=${encodeURIComponent(t.emailSubj)}&body=${encodeURIComponent(fullBody)}`;
    const encoded = encodeURIComponent(fullBody);
    box.innerHTML = `<strong>${t.emailSubj}</strong>${t.emailBody.replace(/\n/g, '<br>')}<span class="link-text">${link}</span><div class="action-row"><button class="action-btn" id="copy-em-btn" onclick="copyText('${encoded}','copy-em-btn','${t.copied}','${t.copyBtn}')">${t.copyBtn}</button><a href="${mailto}" style="flex:1;text-decoration:none"><button class="action-btn primary" style="width:100%">${t.openEmail}</button></a></div>`;
  }
}

function copyText(encoded, btnId, doneLabel, origLabel) {
  navigator.clipboard.writeText(decodeURIComponent(encoded)).then(() => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.textContent = doneLabel;
      btn.classList.add('done');
      setTimeout(() => { btn.textContent = origLabel; btn.classList.remove('done'); }, 2000);
    }
  });
}

/* ── Init ── */
document.getElementById('input-nombre').addEventListener('input', updateProgress);
document.getElementById('input-negocio').addEventListener('input', updateProgress);

const urlLang = new URLSearchParams(window.location.search).get('lang');
if (urlLang && ['es', 'en', 'pt'].includes(urlLang)) {
  setLang(urlLang);
  document.querySelector('.send-section').style.display = 'none';
}
