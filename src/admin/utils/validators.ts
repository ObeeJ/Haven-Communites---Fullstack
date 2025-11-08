/**
 * Validation utilities for admin forms
 */

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string, minLength: number = 6): boolean => {
  return password.length >= minLength;
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validatePhone = (phone: string): boolean => {
  // Basic phone validation - adjust pattern based on your requirements
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
};

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateLoginForm = (
  email: string,
  password: string
): ValidationResult => {
  if (!validateRequired(email)) {
    return { isValid: false, error: 'Email is required' };
  }

  if (!validateEmail(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  if (!validateRequired(password)) {
    return { isValid: false, error: 'Password is required' };
  }

  if (!validatePassword(password, 6)) {
    return { isValid: false, error: 'Password must be at least 6 characters' };
  }

  return { isValid: true };
};

export const validateProjectForm = (data: {
  title: string;
  description: string;
  location: string;
  imageUrl: string;
}): ValidationResult => {
  if (!validateRequired(data.title)) {
    return { isValid: false, error: 'Project title is required' };
  }

  if (!validateRequired(data.description)) {
    return { isValid: false, error: 'Project description is required' };
  }

  if (!validateRequired(data.location)) {
    return { isValid: false, error: 'Project location is required' };
  }

  if (!validateRequired(data.imageUrl)) {
    return { isValid: false, error: 'Project image is required' };
  }

  if (!validateUrl(data.imageUrl)) {
    return { isValid: false, error: 'Please enter a valid image URL' };
  }

  return { isValid: true };
};

export const validateBlogPostForm = (data: {
  title: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  category: string;
}): ValidationResult => {
  if (!validateRequired(data.title)) {
    return { isValid: false, error: 'Blog title is required' };
  }

  if (!validateRequired(data.content)) {
    return { isValid: false, error: 'Blog content is required' };
  }

  if (!validateRequired(data.excerpt)) {
    return { isValid: false, error: 'Blog excerpt is required' };
  }

  if (!validateRequired(data.imageUrl)) {
    return { isValid: false, error: 'Blog image is required' };
  }

  if (!validateUrl(data.imageUrl)) {
    return { isValid: false, error: 'Please enter a valid image URL' };
  }

  if (!validateRequired(data.category)) {
    return { isValid: false, error: 'Blog category is required' };
  }

  return { isValid: true };
};
