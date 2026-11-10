// All site copy lives here, in Vietnamese (vi, default) and English (en).
// Prices and staff roles come from the BiDi Homecare catalog
// (psilabvnorg/BiDi-Homecare: src/catalog.js). Prices exclude 8% VAT.
// Anything marked SAMPLE is placeholder content: swap it for real data before launch.

export const CONTACT = {
  phone: '038 386 4255',
  tel: '+84383864255',
  zalo: 'https://zalo.me/0383864255',
  // SAMPLE: replace with the real email and address when available.
  email: 'lienhe@bidihomecare.vn',
  city: { vi: 'Hà Nội', en: 'Hanoi' }
};

export const UI = {
  skip: { vi: 'Bỏ qua đến nội dung', en: 'Skip to content' },
  nav: [
    { href: '#services', vi: 'Dịch vụ', en: 'Services' },
    { href: '#pricing', vi: 'Bảng giá', en: 'Pricing' },
    { href: '#team', vi: 'Đội ngũ', en: 'Our team' },
    { href: '#stories', vi: 'Cảm nhận', en: 'Stories' },
    { href: '#contact', vi: 'Liên hệ', en: 'Contact' }
  ],
  call: { vi: 'Gọi ngay', en: 'Call us' },
  zalo: { vi: 'Nhắn Zalo', en: 'Chat on Zalo' },
  menu: { vi: 'Mở menu', en: 'Open menu' },
  close: { vi: 'Đóng', en: 'Close' },
  langLabel: { vi: 'Chọn ngôn ngữ', en: 'Choose language' },
  from: { vi: 'Từ', en: 'From' },
  vatNote: { vi: 'Giá chưa gồm VAT 8%. Vật tư tiêu hao chuyên môn tính riêng và báo trước khi dùng.', en: 'Prices exclude 8% VAT. Medical consumables are charged separately and agreed before use.' },
  notAvailable: { vi: 'Không áp dụng', en: 'Not offered' },
  bookThis: { vi: 'Đặt gói này', en: 'Book this plan' },
  readMore: { vi: 'Đọc tiếp', en: 'Read more' },
  sample: { vi: 'Nội dung mẫu', en: 'Sample content' },
  copied: { vi: 'Đã sao chép lời nhắn. Hãy dán vào Zalo để gửi cho BiDi nhé!', en: 'Message copied. Paste it into Zalo to send it to BiDi!' },
  zoom: { vi: 'Phóng to', en: 'Zoom in' }
};

export const HERO = {
  eyebrow: { vi: 'Chăm sóc sức khỏe tại nhà · Hà Nội', en: 'Home health care · Hanoi' },
  title: {
    vi: 'Chăm sóc người thân <em>như chính gia đình mình</em>',
    en: 'Caring for your loved ones <em>like our own family</em>'
  },
  lead: {
    vi: 'Điều dưỡng, hộ lý và caregiver tận tâm đến tận nhà, giúp ông bà, cha mẹ được chăm sóc chu đáo ngay trong ngôi nhà thân quen.',
    en: 'Caring nurses, care aides and caregivers who come to your home, so your parents and grandparents are looked after in the place they know best.'
  },
  ctaPrimary: { vi: 'Đặt lịch chăm sóc', en: 'Book a visit' },
  ctaSecondary: { vi: 'Tư vấn miễn phí qua Zalo', en: 'Free advice on Zalo' },
  badges: [
    { icon: 'shield', vi: 'Điều dưỡng có giấy phép hành nghề', en: 'Licensed nurses' },
    { icon: 'clock', vi: 'Linh hoạt theo giờ, ca, tháng', en: 'By the hour, shift or month' },
    { icon: 'home', vi: 'Chăm sóc tận nhà', en: 'Care at home' }
  ],
  note: { vi: 'Đang có điều dưỡng sẵn sàng hôm nay', en: 'Carers available today' }
};

export const WHY = {
  num: '01',
  eyebrow: { vi: 'Vì sao chọn BiDi', en: 'Why BiDi' },
  title: { vi: 'Ấm áp như người nhà, <em>vững vàng như chuyên gia</em>', en: 'Warm like family, <em>skilled like professionals</em>' },
  lead: {
    vi: 'Chúng tôi tin rằng người cao tuổi xứng đáng được chăm sóc bằng cả chuyên môn lẫn sự dịu dàng. Mỗi ca chăm sóc đều bắt đầu bằng việc lắng nghe gia đình.',
    en: 'We believe older people deserve care that is both skilled and gentle. Every visit starts by listening to the family.'
  },
  stats: [
    // From the BD-CARE partnership poster: 20 hospitals & clinics, 80+ staff.
    { value: 80, suffix: '+', vi: 'Nhân sự chăm sóc', en: 'Care staff' },
    { value: 20, suffix: '', vi: 'Bệnh viện & phòng khám đồng hành', en: 'Partner hospitals & clinics' },
    // SAMPLE rating
    { value: 4.8, decimals: 1, suffix: '/5', vi: 'Đánh giá từ gia đình', en: 'Family rating' },
    { value: 24, suffix: '/7', vi: 'Tiếp nhận yêu cầu', en: 'Requests accepted' }
  ],
  cards: [
    { icon: 'shield', vi: ['Đúng người, đúng việc', 'Điều dưỡng có chứng chỉ hành nghề cho việc chuyên môn; hộ lý và caregiver cho sinh hoạt, đồng hành.'], en: ['The right person for the job', 'Licensed nurses for clinical care; care aides and caregivers for daily living and companionship.'] },
    { icon: 'clipboard', vi: ['Báo cáo minh bạch', 'Sau mỗi ca, gia đình nhận ghi chú về sức khỏe, ăn uống và tinh thần của người thân.'], en: ['Clear reports', 'After every visit the family gets notes on health, meals and mood.'] },
    { icon: 'calendar', vi: ['Linh hoạt thời gian', 'Từ 1 giờ đến 3 tháng. Đặt theo giờ, theo ca 12–24 giờ hoặc gói dài hạn.'], en: ['Flexible hours', 'From 1 hour to 3 months: hourly, 12–24 hour shifts or long-term plans.'] },
    { icon: 'smile', vi: ['Tận tâm, nhẹ nhàng', 'Trò chuyện, đọc sách, đi dạo cùng ông bà. Chăm cả thân lẫn tâm.'], en: ['Kind and gentle', 'Chatting, reading and walking together. Care for body and mind.'] }
  ],
  photoAlt: { vi: 'Điều dưỡng BiDi trò chuyện cùng bà cụ trong phòng khách', en: 'A BiDi nurse chatting with an elderly woman in her living room' },
  photoTag: { vi: 'Mỗi ngày đều là một ngày vui', en: 'Every day can be a good day' }
};

// Service groups, with "from" prices taken from catalog.js (Caregiver = lowest tier).
export const SERVICES = {
  num: '02',
  eyebrow: { vi: 'Dịch vụ', en: 'Services' },
  title: { vi: 'Chăm sóc trọn vẹn, <em>theo đúng nhu cầu</em>', en: 'Complete care, <em>shaped around you</em>' },
  tabs: [
    {
      id: 'elder',
      vi: 'Người cao tuổi', en: 'Elderly care',
      tag: { vi: 'Đồng hành mỗi ngày', en: 'Company every day' },
      items: [
        { icon: 'droplet', vi: ['Chăm sóc cá nhân', 'Tắm, gội đầu, vệ sinh răng miệng, thay quần áo, hỗ trợ đi vệ sinh.'], en: ['Personal care', 'Bathing, hair washing, oral hygiene, dressing and toileting.'], from: 60000, unit: { vi: '/lần', en: '/visit' } },
        { icon: 'book', vi: ['Hỗ trợ tinh thần', 'Trò chuyện, đọc sách, đồng hành giải trí và sinh hoạt xã hội.'], en: ['Companionship', 'Conversation, reading, leisure and social activities.'], from: 180000, unit: { vi: '/2 giờ', en: '/2 hours' } },
        { icon: 'walk', vi: ['Vận động & đi lại', 'Hỗ trợ di chuyển, chuyển tư thế, đồng hành đi bộ an toàn.'], en: ['Mobility', 'Help moving around, repositioning and safe walks.'], from: 100000, unit: { vi: '/lần', en: '/visit' } },
        { icon: 'stethoscope', vi: ['Đồng hành đi khám', 'Đưa đón, đi cùng ông bà đi khám và tái khám, ghi lại lời dặn của bác sĩ.'], en: ['Doctor visits', 'Accompanying check-ups and follow-ups, noting the doctor’s advice.'], from: 250000, unit: { vi: '/2 giờ', en: '/2 hours' } },
        { icon: 'clock', vi: ['Theo giờ, theo ca', 'Từ 1 giờ đến ca 24 giờ, mỗi giờ chọn một việc cần làm.'], en: ['Hourly & shifts', 'From 1 hour up to 24-hour shifts, one task per hour.'], from: 150000, unit: { vi: '/giờ', en: '/hour' } },
        { icon: 'calendar', vi: ['Gói dài hạn', 'Gói 1–3 tháng, người chăm sóc cố định, ông bà quen mặt, gia đình yên tâm.'], en: ['Long-term plans', '1–3 month plans with a regular carer your loved one gets to know.'], from: 15000000, unit: { vi: '/tháng', en: '/month' } }
      ]
    },
    {
      id: 'xv',
      vi: 'Sau xuất viện', en: 'After hospital',
      tag: { vi: 'Theo dõi chuyên môn', en: 'Clinical follow-up' },
      items: [
        { icon: 'activity', vi: ['Theo dõi sinh tồn', 'Đo huyết áp, mạch, nhiệt độ, SpO₂ và theo dõi triệu chứng hằng ngày.'], en: ['Vital signs', 'Blood pressure, pulse, temperature, SpO₂ and daily symptom checks.'], from: 1800000, unit: { vi: '/3 ngày', en: '/3 days' } },
        { icon: 'cross', vi: ['Chăm sóc vết thương', 'Thay băng, chăm sóc vết thương đơn giản đến phức tạp, loét tỳ đè.'], en: ['Wound care', 'Dressing changes and care for simple to complex wounds and pressure sores.'], from: 200000, unit: { vi: '/lần', en: '/visit' } },
        { icon: 'lungs', vi: ['Sonde & mở khí quản', 'Vệ sinh ống sonde, cho ăn qua sonde, chăm sóc ống mở khí quản, hút đờm.'], en: ['Tubes & tracheostomy', 'Catheter and feeding-tube care, tube feeding, tracheostomy care, suction.'], from: 250000, unit: { vi: '/lần', en: '/visit' } },
        { icon: 'walk', vi: ['Phục hồi chức năng', 'Hướng dẫn vận động tại giường, hỗ trợ đi bộ theo kế hoạch đã có.'], en: ['Rehabilitation', 'Bed exercises and assisted walking following the care plan.'], from: 100000, unit: { vi: '/lần', en: '/visit' } },
        { icon: 'pill', vi: ['Hỗ trợ dùng thuốc', 'Nhắc và hỗ trợ dùng thuốc theo hướng dẫn, chỉ định của bác sĩ.'], en: ['Medication support', 'Reminders and help taking medicine as prescribed.'], from: 1800000, unit: { vi: '/3 ngày', en: '/3 days' } },
        { icon: 'clipboard', vi: ['Báo cáo cho gia đình', 'Ghi nhận diễn biến, báo ngay khi có bất thường để gia đình kịp xử lý.'], en: ['Family updates', 'We track progress and alert you right away if anything changes.'], from: null }
      ]
    }
  ],
  included: { vi: 'Đã bao gồm trong gói', en: 'Included in plans' }
};

// Roles: from catalog.js STAFF and SVC_INFO.
export const ROLES = {
  num: '03',
  eyebrow: { vi: 'Ai sẽ chăm sóc', en: 'Who will care' },
  title: { vi: 'Ba vai trò, <em>một trái tim</em>', en: 'Three roles, <em>one heart</em>' },
  lead: { vi: 'Không chắc nên chọn ai? Hãy nhắn cho BiDi, chúng tôi sẽ cùng gia đình đánh giá tình trạng và gợi ý người phù hợp.', en: 'Not sure who to choose? Message BiDi and we will assess your loved one’s needs together and suggest the right carer.' },
  fitLabel: { vi: 'Phù hợp khi', en: 'Best for' },
  nofitLabel: { vi: 'Không phù hợp', en: 'Not for' },
  items: [
    {
      id: 'dd', tone: 'navy', icon: 'stethoscope', fromHour: 200000,
      name: { vi: 'Điều dưỡng', en: 'Nurse' },
      tier: { vi: 'Chuyên môn', en: 'Clinical' },
      req: { vi: 'Có chứng chỉ hành nghề, trên 2 năm kinh nghiệm', en: 'Licensed, 2+ years of experience' },
      desc: { vi: 'Theo dõi sức khỏe, triệu chứng và thực hiện kỹ thuật điều dưỡng tại nhà theo kế hoạch chăm sóc.', en: 'Monitors health and symptoms and performs nursing procedures at home following the care plan.' },
      fit: { vi: ['Sau xuất viện cần theo dõi sức khỏe', 'Đo huyết áp, mạch, SpO₂ định kỳ', 'Có vết thương cần thay băng', 'Có sonde hoặc ống mở khí quản'], en: ['Recovering after a hospital stay', 'Regular blood pressure, pulse, SpO₂ checks', 'Wounds that need dressing', 'Feeding tubes or tracheostomy'] },
      nofit: { vi: [], en: [] }
    },
    {
      id: 'hl', tone: 'bronze', icon: 'droplet', fromHour: 180000,
      name: { vi: 'Hộ lý', en: 'Care aide' },
      tier: { vi: 'Sinh hoạt', en: 'Daily living' },
      req: { vi: 'Nhân viên y tế, điều dưỡng có kinh nghiệm trên 6 tháng', en: 'Health workers with 6+ months of experience' },
      desc: { vi: 'Chăm sóc sinh hoạt hằng ngày: tắm rửa, vệ sinh, ăn uống, đi vệ sinh, di chuyển, chuyển tư thế.', en: 'Daily living care: bathing, hygiene, meals, toileting, moving and repositioning.' },
      fit: { vi: ['Cần hỗ trợ tắm, ăn, vệ sinh, đi lại', 'Người phụ thuộc nhiều trong sinh hoạt', 'Sau xuất viện đã ổn định'], en: ['Needs help bathing, eating, toileting, walking', 'Highly dependent in daily life', 'Stable after a hospital stay'] },
      nofit: { vi: ['Không thực hiện kỹ thuật điều dưỡng (vết thương, sonde, hút đờm…)'], en: ['No nursing procedures (wounds, tubes, suction…)'] }
    },
    {
      id: 'cg', tone: 'copper', icon: 'smile', fromHour: 150000,
      name: { vi: 'Caregiver', en: 'Caregiver' },
      tier: { vi: 'Đồng hành', en: 'Companion' },
      req: { vi: 'Người chăm sóc có kinh nghiệm trên 2 năm', en: 'Carers with 2+ years of experience' },
      desc: { vi: 'Đồng hành cùng người cao tuổi tỉnh táo, ổn định: trò chuyện, đọc sách, đi bộ, nhắc lịch sinh hoạt.', en: 'Companionship for alert, stable older people: chatting, reading, walks and daily reminders.' },
      fit: { vi: ['Ông bà tỉnh táo, tự giao tiếp được', 'Còn vận động được hoặc hạn chế nhẹ', 'Gia đình bận rộn, cần người bên cạnh'], en: ['Alert and able to communicate', 'Still mobile or only slightly limited', 'Busy families who want someone there'] },
      nofit: { vi: ['Cần theo dõi y tế liên tục', 'Vết thương, sonde cần chăm sóc chuyên môn'], en: ['Needs continuous medical monitoring', 'Wounds or tubes needing clinical care'] }
    }
  ],
  perHour: { vi: '/giờ', en: '/hour' }
};

// Prices: catalog.js PKGS. Order of each price tuple: [Điều dưỡng, Hộ lý, Caregiver].
export const PRICING = {
  num: '04',
  eyebrow: { vi: 'Bảng giá', en: 'Pricing' },
  title: { vi: 'Rõ ràng, <em>không phát sinh bất ngờ</em>', en: 'Clear prices, <em>no surprises</em>' },
  lead: { vi: 'Chọn hình thức phù hợp với gia đình. Mọi gói đều có thể điều chỉnh sau buổi tư vấn đầu tiên.', en: 'Pick what suits your family. Every plan can be adjusted after the first consultation.' },
  tabs: [
    { id: 'gio', vi: 'Theo giờ', en: 'Hourly', rows: [
      { vi: '1 giờ', en: '1 hour', p: [200000, 180000, 150000] },
      { vi: '2 giờ', en: '2 hours', p: [300000, 260000, 220000] },
      { vi: '4 giờ', en: '4 hours', p: [480000, 410000, 350000] },
      { vi: '8 giờ', en: '8 hours', p: [750000, 650000, 580000] }
    ] },
    { id: 'ngay', vi: 'Theo ca, ngày', en: 'Shifts & days', rows: [
      { vi: 'Ca 12 giờ', en: '12-hour shift', p: [1100000, 950000, 850000] },
      { vi: 'Ca 24 giờ', en: '24-hour shift', p: [1400000, 1200000, 1050000] },
      { vi: 'Gói 7 ngày', en: '7 days', p: [7000000, 5500000, 4500000] },
      { vi: 'Gói 15 ngày', en: '15 days', p: [13500000, 10500000, 8500000] },
      { vi: 'Gói 30 ngày', en: '30 days', p: [25000000, 19500000, 15000000] }
    ] },
    { id: 'dai', vi: 'Dài hạn', en: 'Long-term', rows: [
      { vi: '1 tháng', en: '1 month', p: [25000000, 19500000, 15000000] },
      { vi: '2 tháng', en: '2 months', p: [48000000, 37000000, 28500000] },
      { vi: '3 tháng', en: '3 months', p: [69000000, 53000000, 40500000] }
    ] },
    { id: 'xv', vi: 'Sau xuất viện', en: 'After hospital', rows: [
      { vi: '3 ngày', en: '3 days', p: [2700000, 2200000, 1800000] },
      { vi: '7 ngày', en: '7 days', p: [6000000, 5500000, 4000000] },
      { vi: '15 ngày', en: '15 days', p: [12500000, 10000000, 8000000] },
      { vi: '30 ngày', en: '30 days', p: [23000000, 18000000, 14000000] }
    ] }
  ]
};

export const PROCESS = {
  num: '05',
  eyebrow: { vi: 'Quy trình', en: 'How it works' },
  title: { vi: 'Bốn bước nhẹ nhàng <em>để yên tâm</em>', en: 'Four gentle steps <em>to peace of mind</em>' },
  steps: [
    { icon: 'phone', vi: ['Gọi hoặc nhắn Zalo', 'Kể cho BiDi về người thân và mong muốn của gia đình.'], en: ['Call or message on Zalo', 'Tell BiDi about your loved one and what your family needs.'] },
    { icon: 'clipboard', vi: ['Tư vấn & đánh giá', 'Chúng tôi đánh giá tình trạng ban đầu và gợi ý gói phù hợp.'], en: ['Advice & assessment', 'We assess the situation and suggest the right plan.'] },
    { icon: 'users', vi: ['Ghép người chăm sóc', 'Chọn điều dưỡng, hộ lý hoặc caregiver hợp tính, hợp việc.'], en: ['Match a carer', 'We pick a nurse, aide or caregiver who fits the person and the job.'] },
    { icon: 'heart', vi: ['Chăm sóc & báo cáo', 'Ca chăm sóc bắt đầu, gia đình nhận cập nhật sau mỗi ca.'], en: ['Care & updates', 'Care begins, and the family gets an update after every visit.'] }
  ]
};

export const TEAM = {
  num: '06',
  eyebrow: { vi: 'Đội ngũ', en: 'Our team' },
  title: { vi: 'Những người <em>mang yêu thương đến nhà</em>', en: 'The people who <em>bring care home</em>' },
  founder: {
    name: 'Nguyễn Thị Thanh Duyên',
    role: { vi: 'Nhà sáng lập · Coach Dinh dưỡng & Lão khoa', en: 'Founder · Nutrition & Geriatrics Coach' },
    edu: { vi: 'Tốt nghiệp khoá 2020–2024, Trường Đại học Y Hà Nội', en: 'Graduated 2020–2024, Hanoi Medical University' },
    quote: {
      vi: 'Tôi muốn mỗi gia đình đều có thể yên tâm đi làm, vì biết ở nhà, ông bà đang được chăm sóc bằng cả chuyên môn và tình thương.',
      en: 'I want every family to go to work with peace of mind, knowing their parents at home are cared for with both skill and love.'
    }
  },
  // SAMPLE: placeholder nurses (names from the BiDi demo data).
  members: [
    { name: 'Trần Thị Mai', g: 'f', role: { vi: 'Điều dưỡng', en: 'Nurse' }, years: 6, area: 'Đống Đa', rating: '4,9' },
    { name: 'Lê Văn Hùng', g: 'm', role: { vi: 'Điều dưỡng', en: 'Nurse' }, years: 5, area: 'Cầu Giấy', rating: '4,9' },
    { name: 'Phạm Thu Hà', g: 'f2', role: { vi: 'Hộ lý', en: 'Care aide' }, years: 3, area: 'Hai Bà Trưng', rating: '4,8' },
    { name: 'Nguyễn Thị Hồng', g: 'f3', role: { vi: 'Caregiver', en: 'Caregiver' }, years: 4, area: 'Thanh Xuân', rating: '4,8' },
    { name: 'Đỗ Minh Tuấn', g: 'm2', role: { vi: 'Hộ lý', en: 'Care aide' }, years: 2, area: 'Hoàng Mai', rating: '4,7' },
    { name: 'Vũ Thị Lan', g: 'f4', role: { vi: 'Điều dưỡng', en: 'Nurse' }, years: 8, area: 'Ba Đình', rating: '5,0' }
  ],
  yearsLabel: { vi: 'năm kinh nghiệm', en: 'years’ experience' },
  licence: {
    title: { vi: 'Giấy phép hành nghề thật, minh bạch', en: 'Real, verifiable licences' },
    text: { vi: 'Điều dưỡng BiDi có giấy phép hành nghề khám bệnh, chữa bệnh do Sở Y tế Hà Nội cấp. Gia đình có thể xem giấy phép của người chăm sóc trước ca đầu tiên.', en: 'BiDi nurses hold practising licences issued by the Hanoi Department of Health. Families can see their carer’s licence before the first visit.' },
    alt: { vi: 'Giấy phép hành nghề của điều dưỡng BiDi (đã che thông tin cá nhân)', en: 'A BiDi nurse’s practising licence (personal details hidden)' }
  }
};

// SAMPLE: placeholder testimonials.
export const STORIES = {
  num: '07',
  eyebrow: { vi: 'Cảm nhận gia đình', en: 'Family stories' },
  title: { vi: 'Những lời cảm ơn <em>làm chúng tôi ấm lòng</em>', en: 'Thank-yous that <em>warm our hearts</em>' },
  items: [
    { name: 'Chị Lan', who: { vi: 'Con gái ông An, Đống Đa', en: 'Daughter of Mr An, Dong Da' }, g: 'f', stars: 5, vi: 'Bố tôi bị tiểu đường, trước đây hay quên thuốc. Từ khi có cô điều dưỡng của BiDi, huyết áp ổn định hẳn, bố còn mong đến giờ cô tới để kể chuyện.', en: 'My father has diabetes and used to forget his medicine. Since the BiDi nurse started, his blood pressure has settled, and he looks forward to her visits to chat.' },
    { name: 'Anh Quang', who: { vi: 'Con trai bà Bình, Cầu Giấy', en: 'Son of Mrs Binh, Cau Giay' }, g: 'm', stars: 5, vi: 'Mẹ mổ khớp háng xong, cả nhà lo lắm. Điều dưỡng thay băng cẩn thận, hướng dẫn mẹ tập đi từng chút. Sau 3 tuần mẹ đã tự đi lại được.', en: 'After Mum’s hip surgery we were so worried. The nurse changed her dressings carefully and helped her walk again step by step. In three weeks she was walking on her own.' },
    { name: 'Cô Hoa', who: { vi: 'Vợ ông Cường, Ba Đình', en: 'Wife of Mr Cuong, Ba Dinh' }, g: 'f2', stars: 5, vi: 'Ông nhà tôi hay quên, có caregiver đến đọc báo, đi dạo cùng, tôi cũng có thời gian nghỉ ngơi. Các cháu lễ phép, nhẹ nhàng lắm.', en: 'My husband is forgetful. With a caregiver reading the paper and walking with him, I finally get some rest too. They are so polite and gentle.' },
    { name: 'Chị Thảo', who: { vi: 'Con gái bà Nga, Thanh Xuân', en: 'Daughter of Mrs Nga, Thanh Xuan' }, g: 'f3', stars: 5, vi: 'Tôi làm việc ở nước ngoài, mỗi tối đều nhận báo cáo về mẹ: ăn gì, ngủ thế nào, vui hay buồn. Cảm giác như mình vẫn ở bên mẹ.', en: 'I work abroad, and every evening I get a report on Mum: what she ate, how she slept, how she felt. It feels like I am still by her side.' },
    { name: 'Anh Tuấn', who: { vi: 'Con trai ông Phúc, Long Biên', en: 'Son of Mr Phuc, Long Bien' }, g: 'm2', stars: 5, vi: 'Bố đặt sonde sau tai biến, BiDi gửi điều dưỡng có kinh nghiệm, chăm sóc rất bài bản. Giá rõ ràng ngay từ đầu nên gia đình yên tâm.', en: 'Dad has a feeding tube after a stroke. BiDi sent an experienced nurse who is very thorough, and the prices were clear from the start.' },
    { name: 'Chị Minh', who: { vi: 'Cháu gái cụ Tâm, Tây Hồ', en: 'Granddaughter of Mrs Tam, Tay Ho' }, g: 'f4', stars: 5, vi: 'Bà 92 tuổi rồi mà giờ ngày nào cũng cười. Chị hộ lý gội đầu, chải tóc cho bà, hai bà cháu nói chuyện rôm rả cả buổi.', en: 'Grandma is 92 and now she smiles every day. The care aide washes and brushes her hair, and the two of them chat all morning.' }
  ]
};

// SAMPLE: placeholder articles.
export const BLOG = {
  num: '08',
  eyebrow: { vi: 'Kiến thức sức khỏe', en: 'Health tips' },
  title: { vi: 'Góc chia sẻ <em>cho người chăm sóc</em>', en: 'Notes <em>for family carers</em>' },
  items: [
    { img: 'img/health-knowledge.webp', tag: { vi: 'Dinh dưỡng', en: 'Nutrition' }, mins: 5, vi: ['Trao đổi chất ở người cao tuổi', 'Hiểu cơ thể chuyển hoá năng lượng thế nào để xây dựng bữa ăn phù hợp cho ông bà.'], en: ['Metabolism in older age', 'How the body turns food into energy, and how to plan meals that fit.'] },
    { art: 'walk', tag: { vi: 'Vận động', en: 'Mobility' }, mins: 4, vi: ['5 bài tập nhẹ nhàng tại giường', 'Giữ khớp linh hoạt và phòng loét tỳ đè cho người nằm lâu.'], en: ['5 gentle bed exercises', 'Keep joints supple and prevent pressure sores for people in bed.'] },
    { art: 'home', tag: { vi: 'An toàn', en: 'Safety' }, mins: 6, vi: ['Phòng té ngã trong nhà', 'Những thay đổi nhỏ trong nhà tắm, cầu thang giúp ông bà an toàn hơn.'], en: ['Preventing falls at home', 'Small changes to bathrooms and stairs that make home safer.'] }
  ]
};

export const JOIN = {
  partner: {
    eyebrow: { vi: 'Hợp tác', en: 'Partnership' },
    title: { vi: 'Hợp tác & đồng hành cùng BiDi', en: 'Partner with BiDi' },
    text: { vi: 'Bệnh viện, phòng khám và trung tâm dưỡng lão: cùng BiDi nối dài chăm sóc từ bệnh viện về đến nhà.', en: 'Hospitals, clinics and care centres: work with BiDi to extend care from the ward to the home.' },
    ticks: { vi: ['20 bệnh viện & phòng khám', '80+ nhân sự', 'Chuyên môn · Trách nhiệm · Tận tâm'], en: ['20 hospitals & clinics', '80+ staff', 'Skilled · Responsible · Caring'] },
    cta: { vi: 'Đăng ký hợp tác', en: 'Become a partner' },
    alt: { vi: 'Áp phích hợp tác cùng BiDi', en: 'BiDi partnership poster' }
  },
  jobs: {
    eyebrow: { vi: 'Tuyển dụng', en: 'Careers' },
    title: { vi: 'Gia nhập đội ngũ chăm sóc', en: 'Join our care team' },
    text: { vi: 'Tuyển Điều dưỡng, Hộ lý, Caregiver (part-time). Nếu bạn yêu thương người cao tuổi, BiDi đang chờ bạn.', en: 'Hiring nurses, care aides and caregivers (part-time). If you love caring for older people, BiDi wants to meet you.' },
    ticks: { vi: ['Việc gần nhà, linh hoạt thời gian', 'Thu nhập từ 90.000đ/giờ', 'Được đào tạo bài bản', 'Môi trường nhân văn, chuyên nghiệp'], en: ['Work near home, flexible hours', 'Pay from 90,000đ/hour', 'Proper training', 'A kind, professional team'] },
    cta: { vi: 'Ứng tuyển qua Zalo', en: 'Apply on Zalo' },
    alt: { vi: 'Áp phích tuyển dụng điều dưỡng, hộ lý, caregiver', en: 'Recruitment poster for nurses, aides and caregivers' }
  }
};

export const FAQ = {
  num: '09',
  eyebrow: { vi: 'Câu hỏi thường gặp', en: 'FAQ' },
  title: { vi: 'Gia đình <em>thường hỏi</em>', en: 'Families <em>often ask</em>' },
  items: [
    { vi: ['Nên chọn Điều dưỡng, Hộ lý hay Caregiver?', 'Nếu người thân cần theo dõi sức khỏe, có vết thương, sonde hoặc mới xuất viện, hãy chọn Điều dưỡng. Nếu chủ yếu cần hỗ trợ tắm rửa, ăn uống, đi lại, Hộ lý là phù hợp. Nếu ông bà tỉnh táo và cần người trò chuyện, đồng hành, hãy chọn Caregiver. BiDi sẽ tư vấn miễn phí để gia đình chọn đúng.'], en: ['Should I choose a nurse, care aide or caregiver?', 'Choose a nurse if your loved one needs health monitoring, wound or tube care, or has just left hospital. A care aide suits help with bathing, meals and moving. A caregiver suits alert older people who need company. BiDi gives free advice to help you choose.'] },
    // SAMPLE answer: confirm the real lead time.
    { vi: ['Bao lâu thì có người đến chăm sóc?', 'Thông thường BiDi sắp xếp được người chăm sóc trong vòng 24 giờ sau khi tư vấn. Với ca gấp, hãy gọi trực tiếp để được ưu tiên.'], en: ['How soon can a carer start?', 'We can usually arrange a carer within 24 hours of the consultation. For urgent cases, call us directly.'] },
    { vi: ['Giá đã gồm VAT chưa?', 'Giá niêm yết chưa gồm VAT 8%. Vật tư tiêu hao chuyên môn (băng gạc, dụng cụ…) tính riêng và luôn được báo trước khi dùng.'], en: ['Do prices include VAT?', 'Listed prices exclude 8% VAT. Medical consumables (dressings, supplies…) are charged separately and always agreed before use.'] },
    { vi: ['Thanh toán bằng cách nào?', 'Gia đình có thể thanh toán qua MoMo hoặc chuyển khoản ngân hàng sau khi xác nhận lịch.'], en: ['How do I pay?', 'You can pay by MoMo or bank transfer once the booking is confirmed.'] },
    { vi: ['Có thể đổi người chăm sóc không?', 'Hoàn toàn được. Nếu ông bà chưa hợp, BiDi sẽ sắp xếp người khác. Sự thoải mái của người thân là ưu tiên của chúng tôi.'], en: ['Can we change carers?', 'Of course. If it is not a good fit, BiDi will arrange someone else. Your loved one’s comfort comes first.'] }
  ]
};

export const CONTACT_SECTION = {
  num: '10',
  eyebrow: { vi: 'Liên hệ', en: 'Contact' },
  title: { vi: 'Hãy để BiDi <em>chăm sóc cùng bạn</em>', en: 'Let BiDi <em>care alongside you</em>' },
  lead: { vi: 'Để lại vài thông tin, BiDi sẽ gọi lại tư vấn miễn phí. Hoặc nhắn Zalo ngay, chúng tôi luôn sẵn lòng lắng nghe.', en: 'Leave a few details and BiDi will call you back for free advice. Or message us on Zalo, we are always happy to listen.' },
  form: {
    name: { vi: 'Tên của bạn', en: 'Your name' },
    phone: { vi: 'Số điện thoại', en: 'Phone number' },
    need: { vi: 'Bạn cần chăm sóc cho ai?', en: 'Who needs care?' },
    needs: { vi: ['Người cao tuổi', 'Người bệnh sau xuất viện', 'Chưa rõ, cần tư vấn'], en: ['An older person', 'Someone just out of hospital', 'Not sure, need advice'] },
    note: { vi: 'Lời nhắn (không bắt buộc)', en: 'Message (optional)' },
    submit: { vi: 'Gửi qua Zalo', en: 'Send via Zalo' },
    hint: { vi: 'Lời nhắn sẽ được sao chép, bạn chỉ cần dán vào Zalo.', en: 'Your message is copied so you can paste it into Zalo.' },
    invalid: { vi: 'Vui lòng nhập tên và số điện thoại.', en: 'Please enter your name and phone number.' },
    greeting: { vi: 'Xin chào BiDi Homecare, tôi cần tư vấn.', en: 'Hello BiDi Homecare, I would like some advice.' }
  },
  hotline: { vi: 'Hotline / Zalo', en: 'Hotline / Zalo' },
  email: { vi: 'Email', en: 'Email' },
  area: { vi: 'Khu vực phục vụ', en: 'Service area' },
  areaText: { vi: 'Nội thành Hà Nội và các quận lân cận', en: 'Central Hanoi and nearby districts' },
  hours: { vi: 'Giờ tư vấn', en: 'Advice hours' },
  // SAMPLE hours
  hoursText: { vi: 'Mỗi ngày 7:00 – 21:00 · Ca gấp: 24/7', en: 'Daily 7:00 – 21:00 · Urgent: 24/7' },
  districts: ['Ba Đình', 'Hoàn Kiếm', 'Đống Đa', 'Cầu Giấy', 'Hai Bà Trưng', 'Thanh Xuân', 'Hoàng Mai', 'Tây Hồ', 'Long Biên', 'Nam Từ Liêm', 'Bắc Từ Liêm', 'Hà Đông']
};

export const FOOTER = {
  tagline: { vi: 'Chăm sóc người thân như chính gia đình mình.', en: 'Caring for your loved ones like our own family.' },
  copy: { vi: 'BiDi Homecare. Mọi quyền được bảo lưu.', en: 'BiDi Homecare. All rights reserved.' },
  cols: [
    { h: { vi: 'Dịch vụ', en: 'Services' }, links: [['#services', { vi: 'Người cao tuổi', en: 'Elderly care' }], ['#services', { vi: 'Sau xuất viện', en: 'After hospital' }], ['#pricing', { vi: 'Bảng giá', en: 'Pricing' }]] },
    { h: { vi: 'BiDi', en: 'BiDi' }, links: [['#team', { vi: 'Đội ngũ', en: 'Our team' }], ['#join', { vi: 'Tuyển dụng', en: 'Careers' }], ['#join', { vi: 'Hợp tác', en: 'Partnership' }]] }
  ]
};

export const META = {
  title: { vi: 'BiDi Homecare · Chăm sóc người cao tuổi tại nhà, Hà Nội', en: 'BiDi Homecare · Elderly home care in Hanoi' },
  desc: { vi: 'Điều dưỡng, hộ lý, caregiver chăm sóc người cao tuổi và người bệnh sau xuất viện tại nhà ở Hà Nội. Linh hoạt theo giờ, ca, tháng. Tư vấn miễn phí qua Zalo 038 386 4255.', en: 'Nurses, care aides and caregivers for older people and post-hospital patients at home in Hanoi. Hourly, shift or monthly. Free advice on Zalo 038 386 4255.' }
};
