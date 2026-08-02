export function extractPatient(notes: string) {
  const lower = notes.toLowerCase();

  let species = "";
  let age = "";
  let sex = "";
  let weight = "";
  let breed = "";

  // Species
  if (/\b(dog|canine)\b/i.test(notes)) {
    species = "Dog";
  } else if (/\b(cat|feline)\b/i.test(notes)) {
    species = "Cat";
  } else if (/\b(cow|cattle|bovine)\b/i.test(notes)) {
    species = "Cattle";
  } else if (/\b(buffalo)\b/i.test(notes)) {
    species = "Buffalo";
  } else if (/\b(goat|caprine)\b/i.test(notes)) {
    species = "Goat";
  } else if (/\b(sheep|ovine)\b/i.test(notes)) {
    species = "Sheep";
  } else if (/\b(horse|equine)\b/i.test(notes)) {
    species = "Horse";
  } else if (/\b(pig|swine|porcine)\b/i.test(notes)) {
    species = "Pig";
  } else if (/\b(rabbit)\b/i.test(notes)) {
    species = "Rabbit";
  } else if (/\b(camel)\b/i.test(notes)) {
    species = "Camel";
  } else if (/\b(chicken|hen|broiler|layer|poultry)\b/i.test(notes)) {
    species = "Poultry";
  }

  // Age
  const agePatterns = [
    /\b(\d+(?:\.\d+)?)\s*(years?|yrs?|months?|mos?|weeks?|days?)\s*old\b/i,
    /\b(\d+(?:\.\d+)?)\s*-\s*(year|month|week|day)\s*old\b/i,
    /\bage\s*[:=]?\s*(\d+(?:\.\d+)?)\s*(years?|months?|weeks?|days?)\b/i,
  ];

  for (const pattern of agePatterns) {
    const match = notes.match(pattern);

    if (match) {
      age = `${match[1]} ${match[2]}`;
      break;
    }
  }

  // Sex
  if (/\bmale\b/i.test(notes)) {
    sex = "Male";
  } else if (/\bfemale\b/i.test(notes)) {
    sex = "Female";
  }

  if (/\bneutered\b/i.test(notes)) {
    sex = sex ? `${sex} (Neutered)` : "Neutered";
  }

  if (/\bspayed\b/i.test(notes)) {
    sex = sex ? `${sex} (Spayed)` : "Spayed";
  }

  if (/\bcastrated\b/i.test(notes)) {
    sex = sex ? `${sex} (Castrated)` : "Castrated";
  }

  // Weight
  const weightMatch =
    notes.match(/(\d+(?:\.\d+)?)\s*(kg|kgs|kilograms?)\b/i);

  if (weightMatch) {
    weight = `${weightMatch[1]} kg`;
  }

    // Breed

  const commonBreeds = [
    // Dogs
    "labrador retriever",
    "labrador",
    "golden retriever",
    "german shepherd",
    "french bulldog",
    "english bulldog",
    "cocker spaniel",
    "border collie",
    "border terrier",
    "jack russell",
    "yorkshire terrier",
    "bullmastiff",
    "great dane",
    "rottweiler",
    "doberman",
    "beagle",
    "boxer",
    "pug",
    "spitz",
    "shih tzu",
    "lhasa apso",
    "chihuahua",
    "indie",
    "indian pariah",
    "mongrel",
    "rajapalayam",
    "mudhol hound",
    "combai",

    // Cats
    "maine coon",
    "british shorthair",
    "ragdoll",
    "persian",
    "siamese",

    // Cattle
    "holstein friesian",
    "holstein",
    "jersey",
    "sahiwal",
    "gir",
    "ongole",
    "red sindhi",
    "angus",
    "hf",

    // Buffalo
    "murrah",
    "mehsana",

    // Horses
    "thoroughbred",
    "marwari",
    "arabian",
    "pony",
  ];


  // First check explicit breed field
  const breedMatch = notes.match(
  /breed\s*[:=-]\s*([a-zA-Z\s]+?)(?=\s+(?:dog|cat|cow|cattle|animal|presented|with|male|female|\d)|[,.]|$)/i
);
  if (breedMatch) {
    breed = breedMatch[1]
      .trim()
      .replace(/\b\w/g, (char) =>
        char.toUpperCase()
      );
  }


  // Check known breeds
  if (!breed) {

    // Longest breed names first
    commonBreeds.sort(
      (a, b) => b.length - a.length
    );


    for (const b of commonBreeds) {

      if (lower.includes(b)) {

        breed =
          b === "hf"
            ? "Holstein Friesian"
            : b
                .split(" ")
                .map(
                  word =>
                    word.charAt(0).toUpperCase() +
                    word.slice(1)
                )
                .join(" ");

        break;
      }
    }
  }

  return {
    species,
    breed,
    age,
    sex,
    weight,
  };
}