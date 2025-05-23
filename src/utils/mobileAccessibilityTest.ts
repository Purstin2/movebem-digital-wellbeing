export interface AccessibilityTestResult {
  touchTargets: {
    passed: boolean;
    issues: number;
  };
  fontSize: {
    passed: boolean;
    issues: number;
  };
}

export function testMobileAccessibility(): AccessibilityTestResult {
  // Test touch target sizes
  const touchElements = document.querySelectorAll('button, a, input, select');
  let touchIssues = 0;
  touchElements.forEach(el => {
    const rect = (el as HTMLElement).getBoundingClientRect();
    if (rect.width < 44 || rect.height < 44) touchIssues++;
  });

  // Test font sizes
  const textElements = document.querySelectorAll('p, h1, h2, h3, span');
  let fontIssues = 0;
  textElements.forEach(el => {
    const size = parseInt(window.getComputedStyle(el as HTMLElement).fontSize);
    if (size < 16) fontIssues++;
  });

  return {
    touchTargets: {
      passed: touchIssues === 0,
      issues: touchIssues
    },
    fontSize: {
      passed: fontIssues === 0,
      issues: fontIssues
    }
  };
} 
 