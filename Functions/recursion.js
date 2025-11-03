// Recursive Function is when a function calls itself to solve a problem by breaking it down into smaller subproblems.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5)); // Output: 120

// Recursive Function
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(10)); // Output: 55

// Recursive Function
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 5)); // Output: 32

// REAL-WORLD SOLUTIONS:

// 1. File System Tree Traversal
function calculateFolderSize(folder) {
  let totalSize = folder.size || 0;

  if (folder.children && folder.children.length > 0) {
    folder.children.forEach((child) => {
      totalSize += calculateFolderSize(child);
    });
  }

  return totalSize;
}

const fileSystem = {
  name: "root",
  size: 0,
  children: [
    {
      name: "documents",
      size: 100,
      children: [
        { name: "resume.pdf", size: 50 },
        { name: "cover.pdf", size: 30 },
      ],
    },
    {
      name: "photos",
      size: 500,
      children: [
        {
          name: "vacation",
          size: 200,
          children: [{ name: "beach.jpg", size: 150 }],
        },
      ],
    },
  ],
};
console.log("Total Size:", calculateFolderSize(fileSystem)); // Output: 1030

// 2. Nested Comments/Replies System
function flattenComments(comments, depth = 0) {
  let result = [];

  comments.forEach((comment) => {
    result.push({ ...comment, depth });

    if (comment.replies && comment.replies.length > 0) {
      result = result.concat(flattenComments(comment.replies, depth + 1));
    }
  });

  return result;
}

const comments = [
  {
    id: 1,
    text: "Great post!",
    replies: [
      { id: 2, text: "Thanks!", replies: [{ id: 3, text: "You're welcome!" }] },
      { id: 4, text: "Agreed!" },
    ],
  },
  { id: 5, text: "Nice work" },
];
console.log("Flattened:", flattenComments(comments));

// 3. Organization Hierarchy
function findEmployee(org, employeeId) {
  if (org.id === employeeId) {
    return org;
  }

  if (org.reports && org.reports.length > 0) {
    for (let report of org.reports) {
      const found = findEmployee(report, employeeId);
      if (found) return found;
    }
  }

  return null;
}

const company = {
  id: 1,
  name: "CEO",
  reports: [
    {
      id: 2,
      name: "CTO",
      reports: [
        { id: 4, name: "Dev Lead" },
        { id: 5, name: "QA Lead" },
      ],
    },
    { id: 3, name: "CFO", reports: [{ id: 6, name: "Accountant" }] },
  ],
};
console.log("Found:", findEmployee(company, 5)); // Output: { id: 5, name: 'QA Lead' }

// 4. Menu/Sitemap Generator
function generateBreadcrumbs(menu, targetId, path = []) {
  if (menu.id === targetId) {
    return [...path, menu.name]; // Target found: adds current menu name and returns complete breadcrumb path
  }
  if (menu.submenu) {
    for (let item of menu.submenu) {
      const found = generateBreadcrumbs(item, targetId, [...path, menu.name]); // Recursively searches submenu, passing current menu name added to path
      if (found) return found;
    }
  }
  return null; // Target not found in this branch
}

const navigation = {
  id: 1,
  name: "Home",
  submenu: [
    {
      id: 2,
      name: "Products",
      submenu: [
        { id: 4, name: "Electronics", submenu: [{ id: 6, name: "Laptops" }] },
        { id: 5, name: "Clothing" },
      ],
    },
    { id: 3, name: "About" },
  ],
};
console.log("Breadcrumbs:", generateBreadcrumbs(navigation, 6));
// Output: ['Home', 'Products', 'Electronics', 'Laptops']
