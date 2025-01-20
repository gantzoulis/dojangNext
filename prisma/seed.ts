// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Seed Admins
  const admins = await prisma.admin.createMany({
    data: [
      { id: 'admin-1', username: 'adminuser1', email: 'admin1@example.com' },
      { id: 'admin-2', username: 'adminuser2', email: 'admin2@example.com' },
    ],
  });

  // Seed Parents
  const parents = await prisma.parent.createMany({
    data: [
      {
        id: 'parent-1',
        username: 'parentuser1',
        name: 'John',
        surname: 'Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        address: '123 Main St',
        createdOn: new Date(),
      },
      {
        id: 'parent-2',
        username: 'parentuser2',
        name: 'Jane',
        surname: 'Smith',
        email: 'jane.smith@example.com',
        phone: '0987654321',
        address: '456 Elm St',
        createdOn: new Date(),
      },
    ],
  });

  // Seed Teachers
  const teachers = await prisma.teacher.createMany({
    data: [
      {
        id: 'teacher-1',
        username: 'teachuser1',
        name: 'Alice',
        surname: 'Johnson',
        email: 'alice.johnson@example.com',
        phone: '1122334455',
        address: '789 Oak St',
        img: 'https://via.placeholder.com/150',
        bloodType: 'A+',
        sex: 'FEMALE',
        createdOn: new Date(),
      },
      {
        id: 'teacher-2',
        username: 'teachuser2',
        name: 'Bob',
        surname: 'Brown',
        email: 'bob.brown@example.com',
        phone: '6677889900',
        address: '101 Pine St',
        img: 'https://via.placeholder.com/150',
        bloodType: 'O-',
        sex: 'MALE',
        createdOn: new Date(),
      },
    ],
  });

  // Seed Academies
  const academies = await prisma.academy.createMany({
    data: [
      { academyName: 'Elite Academy', academyOwnerId: 1 },
      { academyName: 'Champion Academy', academyOwnerId: 2 },
    ],
  });

  // Seed HMDBelts and KickBelts
  const hmdBelts = await prisma.hMDBelts.createMany({
    data: [
      { level: 'White Belt' },
      { level: 'Yellow Belt' },
    ],
  });

  const kickBelts = await prisma.kickBelts.createMany({
    data: [
      { level: 'White Belt' },
      { level: 'Orange Belt' },
    ],
  });

  // Seed Members
  const members = await prisma.member.createMany({
    data: [
      {
        id: 'member-1',
        username: 'memberuser1',
        name: 'Charlie',
        surname: 'Green',
        email: 'charlie.green@example.com',
        phone: '2233445566',
        address: '202 Birch St',
        img: 'https://via.placeholder.com/150',
        bloodType: 'B+',
        sex: 'MALE',
        createdOn: new Date(),
        hmdBeltId: 1,
        kickBeltId: 1,
        parentId: 'parent-1',
      },
      {
        id: 'member-2',
        username: 'memberuser2',
        name: 'Diana',
        surname: 'White',
        email: 'diana.white@example.com',
        phone: '3344556677',
        address: '303 Maple St',
        img: 'https://via.placeholder.com/150',
        bloodType: 'AB+',
        sex: 'FEMALE',
        createdOn: new Date(),
        hmdBeltId: 2,
        kickBeltId: 2,
        parentId: 'parent-2',
      },
    ],
  });

  // Seed Classes
  const classes = await prisma.class.createMany({
    data: [
      {
        className: 'Morning Yoga',
        classDescription: 'Beginner yoga class',
        capacity: 20,
        day: 'MONDAY',
        startTime: new Date('2025-01-01T09:00:00Z'),
        endTime: new Date('2025-01-01T10:00:00Z'),
        teacherId: 'teacher-1',
      },
      {
        className: 'Kickboxing Basics',
        classDescription: 'Introduction to kickboxing',
        capacity: 15,
        day: 'WEDNESDAY',
        startTime: new Date('2025-01-01T18:00:00Z'),
        endTime: new Date('2025-01-01T19:30:00Z'),
        teacherId: 'teacher-2',
      },
    ],
  });

  console.log({ admins, parents, teachers, academies, hmdBelts, kickBelts, members, classes });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
