import { Box, Container, Divider, Link, Stack, Typography } from '@mui/material';
import { hotline } from '../data/navigation';

export default function ContactPage() {
  const municipalityAddressBg = [
    'ОБЩИНА ПЕЩЕРА',
    'ул. "Дойранска епопея" №17',
    'обл. Пазарджик',
    '4550, гр. Пещера',
  ];
  const municipalityAddressEn = ['MUNICIPALITY PESHTERA', '17, Dojranska epopeya str.', 'Pazardzhik', '4550, Peshtera', 'Bulgaria'];
  const commonContactRows = [
    { labelBg: 'тел.', labelEn: 'tel.', value: '+359 350 62203' },
    { labelBg: 'БУЛСТАТ', labelEn: 'BULSTAT', value: '000351750' },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 1 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
        Контакти
      </Typography>

      <Box
        id="adres"
        sx={{
          scrollMarginTop: 96,
          border: '1px solid #d8dee8',
          borderRadius: 2,
          p: { xs: 2, md: 2.5 },
          bgcolor: '#f8fafc',
          boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
        }}
      >
        <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.7 }}>
          Общинска администрация
        </Typography>
        <Typography variant="h6" sx={{ mb: 1.25, fontWeight: 700 }}>
          Адрес и официални контакти
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
          <Box sx={{ border: '1px solid #e2e8f0', borderRadius: 1.5, p: 1.5, bgcolor: 'background.paper' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.8 }}>
              Български
            </Typography>
            {municipalityAddressBg.map((line) => (
              <Typography key={line} variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {line}
              </Typography>
            ))}
            <Divider sx={{ my: 1.2 }} />
            {commonContactRows.map((row) => (
              <Typography key={row.labelBg} variant="body2" sx={{ lineHeight: 1.7 }}>
                <strong>{row.labelBg}:</strong> {row.value}
              </Typography>
            ))}
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              <strong>e-mail:</strong>{' '}
              <Link href="mailto:mayor@peshtera.bg" underline="hover">
                mayor@peshtera.bg
              </Link>
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #e2e8f0', borderRadius: 1.5, p: 1.5, bgcolor: 'background.paper' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.8 }}>
              English
            </Typography>
            {municipalityAddressEn.map((line) => (
              <Typography key={line} variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {line}
              </Typography>
            ))}
            <Divider sx={{ my: 1.2 }} />
            {commonContactRows.map((row) => (
              <Typography key={row.labelEn} variant="body2" sx={{ lineHeight: 1.7 }}>
                <strong>{row.labelEn}:</strong> {row.value}
              </Typography>
            ))}
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              <strong>e-mail:</strong>{' '}
              <Link href="mailto:mayor@peshtera.bg" underline="hover">
                mayor@peshtera.bg
              </Link>
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />
        <Stack spacing={0.4}>
          <Typography variant="body2" color="text.secondary">
            ИНФОРМАЦИЯ ЗА РЕДА НА ОБЖАЛВАНЕ НА ИЗДАДЕН АКТ ОТ ОБЩИНА
          </Typography>
          <Typography variant="body2" color="text.secondary">
            РЕД ЗА ПРИЕМАНЕ НА ПРЕДЛОЖЕНИЯ, СИГНАЛИ И ЖАЛБИ В ОБЩИНА ПЕЩЕРА
          </Typography>
        </Stack>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box
        id="rabotno-vreme"
        sx={{ scrollMarginTop: 96, border: '1px solid #e2e8f0', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper' }}
      >
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
          Работно време
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
          <Box sx={{ border: '1px solid #e2e8f0', borderRadius: 1.5, p: 1.5, bgcolor: '#f8fafc' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.7 }}>
              ОБЩИНА ПЕЩЕРА
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              всеки работен ден
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              от 8.30ч. до 12.30ч.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              от 13.30ч. до 17.30ч.
            </Typography>
          </Box>

          <Box sx={{ border: '1px solid #e2e8f0', borderRadius: 1.5, p: 1.5, bgcolor: '#f8fafc' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.7 }}>
              Център за административно обслужване (ЦАО)
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              всеки работен ден
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              от 8.30ч. до 17.30ч. без прекъсване
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
          При промяна в работното време информацията се актуализира в този раздел.
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box
        id="goresht-telefon"
        sx={{ scrollMarginTop: 96, border: '1px solid #e2e8f0', borderRadius: 2, p: { xs: 2, md: 2.5 }, bgcolor: 'background.paper' }}
      >
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
          Телефони и гореща линия
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 1 }}>
          УВАЖАЕМИ СЪГРАЖДАНИ,
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 1 }}>
          Всеки работен ден от 8.30 до 17.30 часа на ГОРЕЩИЯ ни телефон 0350/6-22-16 и 0893532069 можете да подавате
          вашите сигнали за забелязани от вас нередности и нарушения.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 1 }}>
          Те ще бъдат регистрирани и разгледани от ръководството на Общината, и своевременно ще се създаде съответната
          организация за действие.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 1 }}>
          Необходимо е да посочите името си, адрес и телефон за връзка.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 1 }}>
          Анонимни сигнали няма да се приемат.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 1.5 }}>
          Благодарим ви!
        </Typography>

        <Divider sx={{ mb: 1.25 }} />
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
          ГОРЕЩ ТЕЛЕФОН
        </Typography>

        <Stack spacing={0.8}>
          {['0350/6-22-16', '0893532069'].map((p) => (
            <Box key={p} sx={{ p: 1.1, border: '1px solid #e2e8f0', borderRadius: 1.25, bgcolor: '#f8fafc' }}>
              <Link href={`tel:${p.replace(/[^\d+]/g, '')}`} variant="body1" underline="hover" sx={{ fontWeight: 700 }}>
                {p}
              </Link>
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body2" color="text.secondary">
        {hotline.emailNote}
      </Typography>
    </Container>
  );
}
