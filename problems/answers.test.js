const answers = require(`./answers`);

// Question 1
test('Question 1: greet', () => {
  expect(answers.greet('Carmen')).toBe('Good morning, Carmen!');
  expect(answers.greet('Devonte')).toBe('Good morning, Devonte!');
  expect(answers.greet('Reuben Ogbonna')).toBe('Good morning, Reuben Ogbonna!');
});

// Question 2
test('Question 2: logOddNumbers should log odd numbers to the console', () => {
  global.console = { log: jest.fn() };
  answers.logOddNumbers();
  expect(global.console.log).toHaveBeenCalledWith(1);
  expect(global.console.log).toHaveBeenCalledWith(3);
  expect(global.console.log).toHaveBeenCalledWith(5);
  expect(global.console.log).toHaveBeenCalledWith(99);
});

// Question 2
test('Question 2: logOddNumbers should not log even numbers to the console', () => {
  global.console = { log: jest.fn() };
  answers.logOddNumbers();
  expect(global.console.log).not.toHaveBeenCalledWith(2);
  expect(global.console.log).not.toHaveBeenCalledWith(4);
});

// Question 2
test('Question 2: logOddNumbers should return undefined', () => {
  expect(answers.logOddNumbers()).toBeUndefined();
}); 

// Question 3
test(`Question 3: area`, () => {
  expect(answers.area(5, 7)).toBe(35);
  expect(answers.area(15, 10)).toBe(150);
  expect(answers.area(25.75, 42)).toBe(1081.5);
});

// Question 4
test(`Question 4: otherAngle`, () => {
  expect(answers.otherAngle(30, 60)).toBe(90);
  expect(answers.otherAngle(60, 60)).toBe(60);
  expect(answers.otherAngle(43, 78)).toBe(59);
  expect(answers.otherAngle(10, 20)).toBe(150);
});

// Question 5
test(`Question 5: diameterFromArea`, () => {
  expect(answers.diameterFromArea(10)).toBe(3.5682482323055424);
  expect(answers.diameterFromArea(100)).toBe(11.283791670955125);
});

// Question 6
test('Question 6: totalPrice', () => {
  expect(answers.totalPrice(100, 5)).toBe(105);
  expect(answers.totalPrice(250, 20)).toBe(300);
  expect(answers.totalPrice(1, 18)).toBe(1.18);
});

// Question 7
test('Question 7: shortLongShort', () => {
  expect(answers.shortLongShort('abc', 'defgh')).toBe("abcdefghabc");
  expect(answers.shortLongShort('abcde', 'fgh')).toBe("fghabcdefgh");
  expect(answers.shortLongShort('', 'xyz')).toBe("xyz");
});

// Question 8
test('Question 8: describeAge', () => {
  expect(answers.describeAge(11)).toBe("You're a kid.");
  expect(answers.describeAge(13)).toBe("You're a teenager.");
  expect(answers.describeAge(19)).toBe("You're an adult.");
  expect(answers.describeAge(64)).toBe("You're an adult.");
  expect(answers.describeAge(99)).toBe("You're an elderly.");
});

// Question 9
test('Question 9: isLeapYear', () => {
  expect(answers.isLeapYear(2016)).toBe(true);
  expect(answers.isLeapYear(2015)).toBe(false);
  expect(answers.isLeapYear(2100)).toBe(false);
  expect(answers.isLeapYear(2400)).toBe(true);
  expect(answers.isLeapYear(1900)).toBe(false);
  expect(answers.isLeapYear(1752)).toBe(true);
  expect(answers.isLeapYear(1700)).toBe(false);
});

// Question 10
test('Question 10: multisum', () => {
  expect(answers.multisum(13)).toBe(45);
  expect(answers.multisum(17)).toBe(60);
  expect(answers.multisum(1000)).toBe(234168);
});


// Question 11
test('Question 11: asciiValue', () => {
  expect(answers.asciiValue('Four score')).toBe(984);
  expect(answers.asciiValue('Launch School')).toBe(1251);
  expect(answers.asciiValue('a')).toBe(97);
  expect(answers.asciiValue('')).toBe(0);
});

// Question 12
test('Question 12: stringy', () => {
  expect(answers.stringy(6)).toBe("101010");
  expect(answers.stringy(9)).toBe("101010101");
  expect(answers.stringy(4)).toBe("1010");
  expect(answers.stringy(7)).toBe("1010101");
});
