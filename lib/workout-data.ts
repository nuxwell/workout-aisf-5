// Comprehensive workout data for the 6-day standing plan optimized for MediaPipe tracking

export interface Exercise {
  name: string;
  description: string;
  reps?: string;
  duration?: string;
  focus: string;
  trackingQuality: 'Excellent' | 'Good' | 'Fair';
  images: string[]; // Array of 4 demonstration images
}

export interface WorkoutDay {
  day: number;
  name: string;
  description: string;
  warmup: Exercise[];
  mainWorkout: Exercise[];
  cooldown: Exercise[];
}

export interface WorkoutPlan {
  id: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  ageGroup: string;
  duration: number; // weeks
  days: WorkoutDay[];
}

export const workoutPlans: WorkoutPlan[] = [
  {
    id: '6-day-standing',
    name: 'High-Confidence 6-Day Standing Workout Plan (Age 40+)',
    description: 'Optimized for MediaPipe camera tracking, focusing on movements with clear, detectable joint angle changes for accurate rep counting. 30 minutes per day.',
    difficulty: 'beginner',
    ageGroup: '40+',
    duration: 4,
    days: [
      {
        day: 1,
        name: 'Full Body Intro + Mobility (Gentle Start)',
        description: 'A gentle introduction focusing on mobility and basic movements with excellent MediaPipe tracking.',
        warmup: [
          {
            name: 'March in Place',
            description: 'Focus on high knees for excellent tracking',
            focus: 'High knees movement',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056534/pexels-photo-4056534.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056533/pexels-photo-4056533.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Arm Circles',
            description: 'Forward and backward circular motions',
            focus: 'Shoulder mobility',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056532/pexels-photo-4056532.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056531/pexels-photo-4056531.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056530/pexels-photo-4056530.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056529/pexels-photo-4056529.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Side Reaches',
            description: 'Focus on reaching and torso tilt',
            focus: 'Torso flexibility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056528/pexels-photo-4056528.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056527/pexels-photo-4056527.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056526/pexels-photo-4056526.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056525/pexels-photo-4056525.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Knee Lifts',
            description: 'Focus on bringing knees up to hip height',
            focus: 'Hip flexor activation',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056524/pexels-photo-4056524.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056523/pexels-photo-4056523.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056522/pexels-photo-4056522.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056521/pexels-photo-4056521.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Calf Raises (slow)',
            description: 'Focus on full range of motion',
            focus: 'Ankle mobility',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056520/pexels-photo-4056520.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056519/pexels-photo-4056519.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056518/pexels-photo-4056518.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056517/pexels-photo-4056517.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        mainWorkout: [
          {
            name: 'Front Arm Raise',
            description: 'Focus on controlled movement',
            reps: '10-12 reps',
            focus: 'Shoulder strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056516/pexels-photo-4056516.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056515/pexels-photo-4056515.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056514/pexels-photo-4056514.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056513/pexels-photo-4056513.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Side Arm Raise',
            description: 'Focus on controlled movement',
            reps: '10-12 reps',
            focus: 'Lateral deltoids',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056512/pexels-photo-4056512.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056511/pexels-photo-4056511.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056510/pexels-photo-4056510.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056509/pexels-photo-4056509.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Knee Lifts',
            description: 'Focus on lifting the knee to hip height',
            reps: '10-12 reps per leg',
            focus: 'Hip flexors',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056508/pexels-photo-4056508.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056507/pexels-photo-4056507.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056506/pexels-photo-4056506.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056505/pexels-photo-4056505.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Bicep Curls (air)',
            description: 'Focus on full elbow flexion',
            reps: '10-12 reps',
            focus: 'Bicep strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056504/pexels-photo-4056504.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056503/pexels-photo-4056503.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056502/pexels-photo-4056502.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056501/pexels-photo-4056501.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Chair Squats',
            description: 'Focus on sitting back, not down, with controlled descent',
            reps: '8-10 reps',
            focus: 'Leg strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056500/pexels-photo-4056500.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056499/pexels-photo-4056499.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056498/pexels-photo-4056498.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056497/pexels-photo-4056497.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Calf Raises',
            description: 'Focus on slow, full extension',
            reps: '12-15 reps',
            focus: 'Calf strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056496/pexels-photo-4056496.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056495/pexels-photo-4056495.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056494/pexels-photo-4056494.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056493/pexels-photo-4056493.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        cooldown: [
          {
            name: 'Overhead Reach',
            description: 'Arms extended upwards',
            duration: 'Hold 30s',
            focus: 'Shoulder flexibility',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056492/pexels-photo-4056492.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056491/pexels-photo-4056491.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056490/pexels-photo-4056490.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056489/pexels-photo-4056489.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Side Bend',
            description: 'Torso tilted to the side',
            duration: 'Hold 30s per side',
            focus: 'Lateral flexibility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056488/pexels-photo-4056488.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056487/pexels-photo-4056487.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056486/pexels-photo-4056486.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056485/pexels-photo-4056485.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Gentle Forward Fold',
            description: 'Torso bent at the hips',
            duration: 'Hold 30s',
            focus: 'Hamstring stretch',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056484/pexels-photo-4056484.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056483/pexels-photo-4056483.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056482/pexels-photo-4056482.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056481/pexels-photo-4056481.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Cross-arm Shoulder Stretch',
            description: 'Arm pulled across the body',
            duration: 'Hold 30s per arm',
            focus: 'Shoulder flexibility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056480/pexels-photo-4056480.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056479/pexels-photo-4056479.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056478/pexels-photo-4056478.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056477/pexels-photo-4056477.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Deep Breathing',
            description: 'Focus on stillness and deep breaths',
            duration: '1 min',
            focus: 'Relaxation',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056476/pexels-photo-4056476.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056475/pexels-photo-4056475.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056474/pexels-photo-4056474.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056473/pexels-photo-4056473.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ]
      },
      {
        day: 2,
        name: 'Upper Body + Core (Posture & Strength)',
        description: 'Focus on upper body strength and core stability with excellent tracking capabilities.',
        warmup: [
          {
            name: 'March in Place',
            description: 'Light and easy movement',
            focus: 'Warm-up',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056472/pexels-photo-4056472.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056471/pexels-photo-4056471.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056470/pexels-photo-4056470.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056469/pexels-photo-4056469.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Arm Swings (front & back)',
            description: 'Controlled swings',
            focus: 'Shoulder mobility',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056468/pexels-photo-4056468.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056467/pexels-photo-4056467.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056466/pexels-photo-4056466.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056465/pexels-photo-4056465.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Shoulder Rolls (forward & back)',
            description: 'Exaggerated circles',
            focus: 'Shoulder mobility',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056464/pexels-photo-4056464.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056463/pexels-photo-4056463.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056461/pexels-photo-4056461.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Front Arm Raise (mini)',
            description: 'Small, controlled raises',
            focus: 'Shoulder activation',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056460/pexels-photo-4056460.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056459/pexels-photo-4056459.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056458/pexels-photo-4056458.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056457/pexels-photo-4056457.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Torso Twists (gentle)',
            description: 'Controlled rotation',
            focus: 'Spinal mobility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056456/pexels-photo-4056456.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056455/pexels-photo-4056455.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056454/pexels-photo-4056454.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056453/pexels-photo-4056453.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        mainWorkout: [
          {
            name: 'Overhead Press (Air)',
            description: 'Focus on full extension overhead',
            reps: '10-12 reps',
            focus: 'Shoulder strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056452/pexels-photo-4056452.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056451/pexels-photo-4056451.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056450/pexels-photo-4056450.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056449/pexels-photo-4056449.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Front Arm Raise',
            description: 'Controlled movement',
            reps: '10-12 reps',
            focus: 'Anterior deltoids',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056448/pexels-photo-4056448.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056447/pexels-photo-4056447.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056446/pexels-photo-4056446.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056445/pexels-photo-4056445.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Side Arm Raise',
            description: 'Controlled movement',
            reps: '10-12 reps',
            focus: 'Lateral deltoids',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056444/pexels-photo-4056444.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056443/pexels-photo-4056443.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056442/pexels-photo-4056442.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056441/pexels-photo-4056441.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Side Bends',
            description: 'Focus on torso tilt',
            reps: '10-12 reps per side',
            focus: 'Obliques',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056440/pexels-photo-4056440.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056439/pexels-photo-4056439.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056438/pexels-photo-4056438.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056437/pexels-photo-4056437.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Knee-to-Elbow',
            description: 'Focus on bringing knee and opposite elbow close',
            reps: '8-10 reps per side',
            focus: 'Core strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056436/pexels-photo-4056436.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056435/pexels-photo-4056435.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056434/pexels-photo-4056434.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056433/pexels-photo-4056433.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Torso Rotation',
            description: 'Focus on twisting from the core',
            reps: '10-12 reps per side',
            focus: 'Core rotation',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056432/pexels-photo-4056432.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056431/pexels-photo-4056431.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056430/pexels-photo-4056430.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056429/pexels-photo-4056429.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        cooldown: [
          {
            name: 'Cross-arm Shoulder Stretch',
            description: 'Stretch across the body',
            duration: 'Hold 30s per arm',
            focus: 'Shoulder flexibility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056428/pexels-photo-4056428.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056427/pexels-photo-4056427.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056426/pexels-photo-4056426.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056425/pexels-photo-4056425.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Overhead Reach',
            description: 'Arms extended upwards',
            duration: 'Hold 30s',
            focus: 'Shoulder stretch',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056424/pexels-photo-4056424.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056423/pexels-photo-4056423.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056422/pexels-photo-4056422.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056421/pexels-photo-4056421.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Side Bend',
            description: 'Lateral torso stretch',
            duration: 'Hold 30s per side',
            focus: 'Side stretch',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056420/pexels-photo-4056420.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056419/pexels-photo-4056419.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056418/pexels-photo-4056418.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056417/pexels-photo-4056417.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Wall Chest Opener',
            description: 'Arm against wall, chest forward',
            duration: 'Hold 30s per arm',
            focus: 'Chest stretch',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056416/pexels-photo-4056416.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056415/pexels-photo-4056415.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056414/pexels-photo-4056414.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056413/pexels-photo-4056413.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Deep Breathing',
            description: 'Relaxation and recovery',
            duration: '1 min',
            focus: 'Recovery',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056412/pexels-photo-4056412.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056411/pexels-photo-4056411.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056410/pexels-photo-4056410.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056409/pexels-photo-4056409.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ]
      },
      {
        day: 3,
        name: 'Lower Body + Balance (Legs + Hips)',
        description: 'Comprehensive lower body workout with balance challenges for stability.',
        warmup: [
          {
            name: 'March in Place',
            description: 'Get the legs moving',
            focus: 'Leg activation',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056408/pexels-photo-4056408.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056407/pexels-photo-4056407.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056406/pexels-photo-4056406.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056405/pexels-photo-4056405.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Knee Bends (mini squats)',
            description: 'Gentle leg bending',
            focus: 'Knee mobility',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056404/pexels-photo-4056404.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056403/pexels-photo-4056403.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056402/pexels-photo-4056402.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056401/pexels-photo-4056401.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Hip Circles (gentle)',
            description: 'Controlled hip movement',
            focus: 'Hip mobility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056400/pexels-photo-4056400.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056399/pexels-photo-4056399.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056398/pexels-photo-4056398.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056397/pexels-photo-4056397.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Side Leg Swings (controlled)',
            description: 'Small, controlled swings',
            focus: 'Hip mobility',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056396/pexels-photo-4056396.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056395/pexels-photo-4056395.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056394/pexels-photo-4056394.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056393/pexels-photo-4056393.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Calf Raises',
            description: 'Quick warm-up for ankles',
            focus: 'Ankle mobility',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056392/pexels-photo-4056392.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056391/pexels-photo-4056391.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056390/pexels-photo-4056390.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056389/pexels-photo-4056389.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        mainWorkout: [
          {
            name: 'Chair Squats',
            description: 'Focus on depth and control',
            reps: '10-12 reps',
            focus: 'Leg strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056388/pexels-photo-4056388.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056387/pexels-photo-4056387.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056386/pexels-photo-4056386.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056385/pexels-photo-4056385.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Hamstring Curls',
            description: 'Focus on bringing heel to glute',
            reps: '10-12 reps per leg',
            focus: 'Hamstring strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056384/pexels-photo-4056384.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056383/pexels-photo-4056383.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056382/pexels-photo-4056382.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056381/pexels-photo-4056381.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Side Leg Raises',
            description: 'Focus on lifting leg directly to the side',
            reps: '10-12 reps per leg',
            focus: 'Hip abductors',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056380/pexels-photo-4056380.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056379/pexels-photo-4056379.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056378/pexels-photo-4056378.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056377/pexels-photo-4056377.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Back Leg Extensions',
            description: 'Focus on extending leg straight back',
            reps: '10-12 reps per leg',
            focus: 'Glutes',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056376/pexels-photo-4056376.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056375/pexels-photo-4056375.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056374/pexels-photo-4056374.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056373/pexels-photo-4056373.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Calf Raises (slow & controlled)',
            description: 'Focus on full range of motion',
            reps: '15-20 reps',
            focus: 'Calf strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056372/pexels-photo-4056372.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056371/pexels-photo-4056371.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056370/pexels-photo-4056370.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056369/pexels-photo-4056369.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Heel-Toe Balance Hold',
            description: 'Focus on stability (detecting the static pose)',
            reps: 'Hold 30s per foot',
            focus: 'Balance',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056368/pexels-photo-4056368.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056367/pexels-photo-4056367.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056366/pexels-photo-4056366.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056365/pexels-photo-4056365.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        cooldown: [
          {
            name: 'Hamstring Stretch',
            description: 'Leg forward on chair/step',
            duration: 'Hold 30s per leg',
            focus: 'Hamstring flexibility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056364/pexels-photo-4056364.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056363/pexels-photo-4056363.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056362/pexels-photo-4056362.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056361/pexels-photo-4056361.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Calf Stretch (wall)',
            description: 'Against wall stretch',
            duration: 'Hold 30s per leg',
            focus: 'Calf flexibility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056360/pexels-photo-4056360.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056359/pexels-photo-4056359.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056358/pexels-photo-4056358.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056357/pexels-photo-4056357.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Quad Stretch',
            description: 'Heel to glute - standing assist',
            duration: 'Hold 30s per leg',
            focus: 'Quad flexibility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056356/pexels-photo-4056356.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056355/pexels-photo-4056355.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056354/pexels-photo-4056354.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056353/pexels-photo-4056353.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Glute Stretch',
            description: 'Figure-4 if stable, otherwise less deep',
            duration: 'Hold 30s per side',
            focus: 'Glute flexibility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056352/pexels-photo-4056352.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056351/pexels-photo-4056351.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056350/pexels-photo-4056350.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056349/pexels-photo-4056349.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Deep Breathing',
            description: 'Recovery and relaxation',
            duration: '1 min',
            focus: 'Recovery',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056348/pexels-photo-4056348.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056347/pexels-photo-4056347.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056346/pexels-photo-4056346.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056345/pexels-photo-4056345.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ]
      },
      {
        day: 4,
        name: 'Core + Stability (Abs & Obliques)',
        description: 'Focused core strengthening with stability challenges.',
        warmup: [
          {
            name: 'March in Place',
            description: 'Light and rhythmic',
            focus: 'Warm-up',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056344/pexels-photo-4056344.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056343/pexels-photo-4056343.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056342/pexels-photo-4056342.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056341/pexels-photo-4056341.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Torso Twists (gentle)',
            description: 'Prepare the core',
            focus: 'Core activation',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056340/pexels-photo-4056340.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056339/pexels-photo-4056339.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056338/pexels-photo-4056338.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056337/pexels-photo-4056337.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Side Reaches',
            description: 'Extend and engage the sides',
            focus: 'Lateral activation',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056336/pexels-photo-4056336.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056335/pexels-photo-4056335.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056334/pexels-photo-4056334.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056333/pexels-photo-4056333.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Knee Lifts (focus on core)',
            description: 'Engage lower abs',
            focus: 'Core activation',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056332/pexels-photo-4056332.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056331/pexels-photo-4056331.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056330/pexels-photo-4056330.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056329/pexels-photo-4056329.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Arm Circles',
            description: 'Get the upper body moving',
            focus: 'Upper body mobility',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056328/pexels-photo-4056328.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056327/pexels-photo-4056327.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056326/pexels-photo-4056326.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056325/pexels-photo-4056325.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        mainWorkout: [
          {
            name: 'Standing Knee-to-Elbow',
            description: 'Focus on bringing them close',
            reps: '10-12 reps per side',
            focus: 'Core strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056324/pexels-photo-4056324.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056323/pexels-photo-4056323.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056322/pexels-photo-4056322.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056321/pexels-photo-4056321.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Wood Chop (Air)',
            description: 'Focus on diagonal movement',
            reps: '10-12 reps per side',
            focus: 'Core rotation',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056320/pexels-photo-4056320.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056319/pexels-photo-4056319.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056318/pexels-photo-4056318.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056317/pexels-photo-4056317.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Oblique Side Crunch (standing)',
            description: 'Focus on side bending',
            reps: '10-12 reps per side',
            focus: 'Obliques',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056316/pexels-photo-4056316.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056315/pexels-photo-4056315.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056314/pexels-photo-4056314.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056313/pexels-photo-4056313.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'March with Core Engagement',
            description: 'Emphasize controlled knee lifts',
            reps: '15-20 steps',
            focus: 'Core stability',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056312/pexels-photo-4056312.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056311/pexels-photo-4056311.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056310/pexels-photo-4056310.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056309/pexels-photo-4056309.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Side Bends with Hold',
            description: '2-3 sec hold at bottom',
            reps: '8-10 reps per side',
            focus: 'Oblique strength',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056308/pexels-photo-4056308.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056307/pexels-photo-4056307.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056306/pexels-photo-4056306.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056305/pexels-photo-4056305.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Controlled Leg Lift with Arm Balance',
            description: 'Focus on stability',
            reps: '8-10 reps per leg',
            focus: 'Balance & core',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056304/pexels-photo-4056304.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056303/pexels-photo-4056303.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056302/pexels-photo-4056302.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056301/pexels-photo-4056301.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        cooldown: [
          {
            name: 'Standing Twist Hold',
            description: 'Gentle spinal twist',
            duration: 'Hold 30s per side',
            focus: 'Spinal mobility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056300/pexels-photo-4056300.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056299/pexels-photo-4056299.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056298/pexels-photo-4056298.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056297/pexels-photo-4056297.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Side Reach',
            description: 'Lateral stretch',
            duration: 'Hold 30s per side',
            focus: 'Side stretch',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056296/pexels-photo-4056296.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056295/pexels-photo-4056295.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056294/pexels-photo-4056294.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056293/pexels-photo-4056293.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Gentle Forward Fold',
            description: 'Hip hinge stretch',
            duration: 'Hold 30s',
            focus: 'Posterior chain',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056292/pexels-photo-4056292.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056291/pexels-photo-4056291.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056290/pexels-photo-4056290.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056289/pexels-photo-4056289.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Cat–Cow (Standing version)',
            description: 'Focus on spinal flexion/extension',
            duration: 'Flow for 1 min',
            focus: 'Spinal mobility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056288/pexels-photo-4056288.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056287/pexels-photo-4056287.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056286/pexels-photo-4056286.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056285/pexels-photo-4056285.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Deep Breathing',
            description: 'Recovery',
            duration: '1 min',
            focus: 'Recovery',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056284/pexels-photo-4056284.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056283/pexels-photo-4056283.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056282/pexels-photo-4056282.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056281/pexels-photo-4056281.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ]
      },
      {
        day: 5,
        name: 'Full Body Strength (Power & Endurance)',
        description: 'Comprehensive strength training with circuit-style format.',
        warmup: [
          {
            name: 'March in Place',
            description: 'Elevate heart rate',
            focus: 'Cardiovascular prep',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056280/pexels-photo-4056280.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056279/pexels-photo-4056279.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056278/pexels-photo-4056278.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056277/pexels-photo-4056277.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Arm Circles (large)',
            description: 'Full range',
            focus: 'Shoulder mobility',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056276/pexels-photo-4056276.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056275/pexels-photo-4056275.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056274/pexels-photo-4056274.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056273/pexels-photo-4056273.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Knee Bends (deeper)',
            description: 'Prepare for squats',
            focus: 'Leg preparation',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056272/pexels-photo-4056272.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056271/pexels-photo-4056271.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056270/pexels-photo-4056270.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056269/pexels-photo-4056269.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Torso Twist (more active)',
            description: 'Dynamic warm-up',
            focus: 'Core activation',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056268/pexels-photo-4056268.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056267/pexels-photo-4056267.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056266/pexels-photo-4056266.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056265/pexels-photo-4056265.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Calf Raises (faster)',
            description: 'Quick activation',
            focus: 'Ankle activation',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056264/pexels-photo-4056264.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056263/pexels-photo-4056263.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056262/pexels-photo-4056262.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056261/pexels-photo-4056261.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        mainWorkout: [
          {
            name: 'Chair Squats',
            description: 'Focus on good form and depth',
            reps: '10-12 reps',
            focus: 'Leg strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056260/pexels-photo-4056260.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056259/pexels-photo-4056259.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056258/pexels-photo-4056258.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056257/pexels-photo-4056257.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Side Arm Raise',
            description: 'Controlled and full range',
            reps: '10-12 reps',
            focus: 'Shoulder strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056256/pexels-photo-4056256.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056255/pexels-photo-4056255.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056254/pexels-photo-4056254.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056253/pexels-photo-4056253.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Knee-to-Elbow',
            description: 'Keep core engaged',
            reps: '10-12 reps each side',
            focus: 'Core strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056252/pexels-photo-4056252.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056251/pexels-photo-4056251.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056250/pexels-photo-4056250.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056249/pexels-photo-4056249.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Side Step + Mini Squat',
            description: 'Combine lateral movement with squat',
            reps: '10-12 reps per side',
            focus: 'Functional movement',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056248/pexels-photo-4056248.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056247/pexels-photo-4056247.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056246/pexels-photo-4056246.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056245/pexels-photo-4056245.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Wood Chop',
            description: 'Powerful, controlled motion',
            reps: '10-12 reps per side',
            focus: 'Core power',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056244/pexels-photo-4056244.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056243/pexels-photo-4056243.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056242/pexels-photo-4056242.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056241/pexels-photo-4056241.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Leg Swings (forward & back)',
            description: 'Dynamic leg movement',
            reps: '10-12 reps per side',
            focus: 'Hip mobility',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056240/pexels-photo-4056240.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056239/pexels-photo-4056239.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056238/pexels-photo-4056238.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056237/pexels-photo-4056237.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Overhead Press (Air)',
            description: 'Strong upward push',
            reps: '10-12 reps',
            focus: 'Shoulder strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056236/pexels-photo-4056236.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056235/pexels-photo-4056235.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056234/pexels-photo-4056234.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056233/pexels-photo-4056233.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Calf Raise (slow, controlled)',
            description: 'Squeeze at the top',
            reps: '15-20 reps',
            focus: 'Calf strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056232/pexels-photo-4056232.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056231/pexels-photo-4056231.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056230/pexels-photo-4056230.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056229/pexels-photo-4056229.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Bicep Curl (Air)',
            description: 'Focus on controlled curl',
            reps: '15-20 reps',
            focus: 'Bicep strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056228/pexels-photo-4056228.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056227/pexels-photo-4056227.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056226/pexels-photo-4056226.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056225/pexels-photo-4056225.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        cooldown: [
          {
            name: 'Forward Fold',
            description: 'Full body stretch',
            duration: 'Hold 30s',
            focus: 'Posterior chain',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056224/pexels-photo-4056224.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056223/pexels-photo-4056223.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056222/pexels-photo-4056222.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056221/pexels-photo-4056221.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Cross-body Shoulder Stretch',
            description: 'Shoulder flexibility',
            duration: 'Hold 30s per arm',
            focus: 'Shoulder stretch',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056220/pexels-photo-4056220.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056219/pexels-photo-4056219.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056218/pexels-photo-4056218.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056217/pexels-photo-4056217.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Wall Chest Opener',
            description: 'Chest stretch',
            duration: 'Hold 30s per arm',
            focus: 'Chest flexibility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056216/pexels-photo-4056216.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056215/pexels-photo-4056215.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056214/pexels-photo-4056214.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056213/pexels-photo-4056213.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Hamstring Stretch',
            description: 'Leg forward',
            duration: 'Hold 30s per leg',
            focus: 'Hamstring flexibility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056212/pexels-photo-4056212.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056211/pexels-photo-4056211.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056210/pexels-photo-4056210.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056209/pexels-photo-4056209.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Deep Breathing',
            description: 'Recovery',
            duration: '1 min',
            focus: 'Recovery',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056208/pexels-photo-4056208.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056207/pexels-photo-4056207.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056206/pexels-photo-4056206.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056205/pexels-photo-4056205.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ]
      },
      {
        day: 6,
        name: 'Flexibility + Flow (Low Impact Cardio)',
        description: 'Flowing movements focused on flexibility and low-impact cardiovascular exercise.',
        warmup: [
          {
            name: 'March in Place',
            description: 'Gentle start',
            focus: 'Gentle activation',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056204/pexels-photo-4056204.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056203/pexels-photo-4056203.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056202/pexels-photo-4056202.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056201/pexels-photo-4056201.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Shoulder Rolls (slow)',
            description: 'Relaxing the upper body',
            focus: 'Shoulder relaxation',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056200/pexels-photo-4056200.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056199/pexels-photo-4056199.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056198/pexels-photo-4056198.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056197/pexels-photo-4056197.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Side Reaches (slow & controlled)',
            description: 'Gentle stretches',
            focus: 'Lateral mobility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056196/pexels-photo-4056196.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056195/pexels-photo-4056195.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056194/pexels-photo-4056194.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056193/pexels-photo-4056193.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Knee Lifts (gentle)',
            description: 'Light leg movement',
            focus: 'Gentle activation',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056192/pexels-photo-4056192.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056191/pexels-photo-4056191.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056190/pexels-photo-4056190.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056189/pexels-photo-4056189.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Calf Raises (slow)',
            description: 'Light ankle work',
            focus: 'Ankle mobility',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056188/pexels-photo-4056188.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056187/pexels-photo-4056187.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056186/pexels-photo-4056186.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056185/pexels-photo-4056185.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        mainWorkout: [
          {
            name: 'March + Knee Lift (Flowing)',
            description: 'Focus on smooth transition',
            reps: 'Continuous for 2-3 min',
            focus: 'Flow & rhythm',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056184/pexels-photo-4056184.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056183/pexels-photo-4056183.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056182/pexels-photo-4056182.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056181/pexels-photo-4056181.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Side Tap with Reach (Flowing)',
            description: 'Focus on coordination',
            reps: 'Continuous for 2-3 min',
            focus: 'Coordination',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056180/pexels-photo-4056180.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056179/pexels-photo-4056179.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056178/pexels-photo-4056178.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056177/pexels-photo-4056177.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Arm Circles with Steps (Flowing)',
            description: 'Integrate arm and leg movement',
            reps: 'Continuous for 2-3 min',
            focus: 'Full body flow',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056176/pexels-photo-4056176.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056175/pexels-photo-4056175.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056174/pexels-photo-4056174.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056173/pexels-photo-4056173.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Controlled Squats + Breathe (Flowing)',
            description: 'Gentle, rhythmic squats',
            reps: 'Continuous for 2-3 min',
            focus: 'Rhythmic strength',
            trackingQuality: 'Excellent',
            images: [
              'https://images.pexels.com/photos/4056172/pexels-photo-4056172.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056171/pexels-photo-4056171.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056170/pexels-photo-4056170.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056169/pexels-photo-4056169.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Side Bends (flowing)',
            description: 'Smooth side-to-side movement',
            reps: 'Continuous for 2-3 min',
            focus: 'Lateral flow',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056168/pexels-photo-4056168.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056167/pexels-photo-4056167.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056166/pexels-photo-4056166.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056165/pexels-photo-4056165.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Wood Chop (gentle pace, flowing)',
            description: 'Focus on fluid motion',
            reps: 'Continuous for 2-3 min',
            focus: 'Core flow',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056164/pexels-photo-4056164.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056163/pexels-photo-4056163.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056162/pexels-photo-4056162.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056161/pexels-photo-4056161.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Hip Circles (flowing)',
            description: 'Smooth, continuous circles',
            reps: 'Continuous for 2-3 min',
            focus: 'Hip mobility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056160/pexels-photo-4056160.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056159/pexels-photo-4056159.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056158/pexels-photo-4056158.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056157/pexels-photo-4056157.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        cooldown: [
          {
            name: 'Full Body Stretch',
            description: 'Reach up, then gentle forward fold',
            duration: 'Hold 1 min',
            focus: 'Full body stretch',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056156/pexels-photo-4056156.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056155/pexels-photo-4056155.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056154/pexels-photo-4056154.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056153/pexels-photo-4056153.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Hip Opener',
            description: 'Standing figure-4 if stable, or gentle external rotation',
            duration: 'Hold 30s per side',
            focus: 'Hip flexibility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056152/pexels-photo-4056152.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056151/pexels-photo-4056151.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056150/pexels-photo-4056150.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056149/pexels-photo-4056149.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Side Stretch (standing)',
            description: 'Lateral stretch',
            duration: 'Hold 30s per side',
            focus: 'Side flexibility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056148/pexels-photo-4056148.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056147/pexels-photo-4056147.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056146/pexels-photo-4056146.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056145/pexels-photo-4056145.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Calf Stretch (wall)',
            description: 'Against wall',
            duration: 'Hold 30s per leg',
            focus: 'Calf flexibility',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056144/pexels-photo-4056144.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056143/pexels-photo-4056143.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056142/pexels-photo-4056142.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056141/pexels-photo-4056141.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Deep Calm Breathing',
            description: 'Complete relaxation',
            duration: '1 min',
            focus: 'Deep relaxation',
            trackingQuality: 'Good',
            images: [
              'https://images.pexels.com/photos/4056140/pexels-photo-4056140.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056139/pexels-photo-4056139.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056138/pexels-photo-4056138.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056137/pexels-photo-4056137.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ]
      }
    ]
  }
];

export const workoutTemplates = [
  {
    id: 'beginner-strength',
    name: 'Beginner Strength Builder',
    description: 'Perfect for those new to strength training',
    difficulty: 'beginner',
    duration: 30,
    exercises: ['Push-ups', 'Squats', 'Plank', 'Lunges']
  },
  {
    id: 'hiit-cardio',
    name: 'HIIT Cardio Blast',
    description: 'High-intensity interval training for cardio',
    difficulty: 'intermediate',
    duration: 25,
    exercises: ['Burpees', 'Mountain Climbers', 'Jump Squats', 'High Knees']
  },
  {
    id: 'core-power',
    name: 'Core Power Session',
    description: 'Focused core strengthening workout',
    difficulty: 'advanced',
    duration: 20,
    exercises: ['Russian Twists', 'Dead Bug', 'Bicycle Crunches', 'Plank Variations']
  }
];