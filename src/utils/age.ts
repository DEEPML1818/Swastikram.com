/** Swastik Ram's date of birth */
const DOB = new Date(2009, 7, 18); // August 18, 2009 (month is 0-indexed)

/**
 * Returns the current age calculated from DOB.
 * Updates automatically — no manual edits ever needed.
 */
export function getAge(): number {
  const today = new Date();
  let age = today.getFullYear() - DOB.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > DOB.getMonth() ||
    (today.getMonth() === DOB.getMonth() && today.getDate() >= DOB.getDate());
  if (!hasHadBirthdayThisYear) age--;
  return age;
}
