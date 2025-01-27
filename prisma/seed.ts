import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Generate 50 Parents
  const parents = Array.from({ length: 50 }, (_, i) => ({
    id: `parent-${i + 1}`,
    username: `parentuser${i + 1}`,
    name: faker.person.firstName(),
    surname: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    createdOn: new Date(),
  }));
  await prisma.parent.createMany({ data: parents });

// Generate HMD Belts
const hmdBelts = [
  { level: 'White Belt' },
  { level: 'Yellow Belt' },
  { level: 'Orange Belt' },
  { level: 'Green Belt' },
  { level: 'Black Belt' },
];
await prisma.hMDBelts.createMany({ data: hmdBelts });

// Generate Kick Belts
const kickBelts = [
  { level: 'White Belt' },
  { level: 'Yellow Belt' },
  { level: 'Orange Belt' },
  { level: 'Green Belt' },
  { level: 'Black Belt' },
];
await prisma.kickBelts.createMany({ data: kickBelts });

  // Generate 20 Teachers
  const teachers = Array.from({ length: 20 }, (_, i) => ({
    id: `teacher-${i + 1}`,
    username: `teacheruser${i + 1}`,
    name: faker.person.firstName(),
    surname: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    img: `https://i.pravatar.cc/300?img=${i+1}`,
    bloodType: faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']),
    sex: faker.helpers.arrayElement(['MALE', 'FEMALE']),
    createdOn: new Date(),
  }));
  await prisma.teacher.createMany({ data: teachers });

  // Generate 50 Members
  const members = Array.from({ length: 50 }, (_, i) => ({
    id: `member-${i + 1}`,
    username: `memberuser${i + 1}`,
    name: faker.person.firstName(),
    surname: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    img: faker.image.avatar(),
    bloodType: faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']),
    sex: faker.helpers.arrayElement(['MALE', 'FEMALE']),
    createdOn: new Date(),
    hmdBeltId: faker.number.int({ min: 1, max: 5 }), // Assuming 5 HMD Belts exist
    kickBeltId: faker.number.int({ min: 1, max: 5 }), // Assuming 5 Kick Belts exist
    parentId: `parent-${faker.number.int({ min: 1, max: 50 })}`,
  }));
  await prisma.member.createMany({ data: members });

  // Generate Academies
  const academies = [
    { academyName: 'Elite Academy', academyOwnerId: 1 },
    { academyName: 'Champion Academy', academyOwnerId: 2 },
  ];
  await prisma.academy.createMany({ data: academies });

  

  // Generate Classes
  const classes = Array.from({ length: 10 }, (_, i) => ({
    className: faker.company.name(),
    classDescription: faker.company.catchPhrase(),
    capacity: faker.number.int({ min: 10, max: 50 }),
    day: faker.helpers.arrayElement(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']),
    startTime: faker.date.future(),
    endTime: faker.date.future(),
    teacherId: `teacher-${faker.number.int({ min: 1, max: 20 })}`,
  }));
  await prisma.class.createMany({ data: classes });

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
