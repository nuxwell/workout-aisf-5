export const workoutPlans = [
  {
    id: '6-day-standing',
    name: '6-Day Standing Workout Plan',
    description: 'A comprehensive standing-only workout plan optimized for age 40+ with high-confidence MediaPipe tracking',
    difficulty: 'beginner',
    duration: 4, // weeks
    ageGroup: '40+',
    days: [
      {
        day: 1,
        name: 'Full Body Introduction',
        description: 'Gentle introduction to standing exercises with focus on form and movement patterns',
        warmup: [
          {
            name: 'March in Place',
            duration: '2 minutes',
            focus: 'Cardiovascular warm-up',
            trackingQuality: 'Excellent',
            description: 'Lift knees to hip height alternately while maintaining good posture',
            trackingKey: 'march_in_place',
            images: [
              'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056724/pexels-photo-4056724.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Arm Circles',
            duration: '1 minute',
            focus: 'Shoulder mobility',
            trackingQuality: 'Good',
            description: 'Large, controlled circles with arms extended to sides',
            trackingKey: 'arm_circles',
            images: [
              'https://images.pexels.com/photos/4056725/pexels-photo-4056725.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Gentle Torso Twists',
            duration: '1 minute',
            focus: 'Spinal mobility',
            trackingQuality: 'Good',
            description: 'Rotate torso left and right while keeping hips facing forward',
            trackingKey: 'torso_twist',
            images: [
              'https://images.pexels.com/photos/4056726/pexels-photo-4056726.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        mainWorkout: [
          {
            name: 'Standing Push-ups (Wall)',
            reps: '8-12',
            focus: 'Upper body strength',
            trackingQuality: 'Excellent',
            description: 'Stand arm\'s length from wall, place palms flat against wall, push body toward and away from wall',
            trackingKey: 'wall_pushup',
            images: [
              'https://images.pexels.com/photos/4056727/pexels-photo-4056727.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056728/pexels-photo-4056728.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Chair-Assisted Squats',
            reps: '8-12',
            focus: 'Lower body strength',
            trackingQuality: 'Excellent',
            description: 'Use chair for support, lower into squat position and return to standing',
            trackingKey: 'assisted_squat',
            images: [
              'https://images.pexels.com/photos/4056729/pexels-photo-4056729.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056730/pexels-photo-4056730.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Knee Raises',
            reps: '10 each leg',
            focus: 'Core and balance',
            trackingQuality: 'Excellent',
            description: 'Lift one knee toward chest, hold briefly, lower with control',
            trackingKey: 'knee_raise',
            images: [
              'https://images.pexels.com/photos/4056731/pexels-photo-4056731.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Heel Raises',
            reps: '12-15',
            focus: 'Calf strength',
            trackingQuality: 'Good',
            description: 'Rise up on toes, hold briefly, lower with control',
            trackingKey: 'heel_raise',
            images: [
              'https://images.pexels.com/photos/4056732/pexels-photo-4056732.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        cooldown: [
          {
            name: 'Standing Forward Fold',
            duration: '30 seconds',
            focus: 'Hamstring stretch',
            trackingQuality: 'Good',
            description: 'Hinge at hips, let arms hang toward floor, bend knees as needed',
            trackingKey: 'forward_fold',
            images: [
              'https://images.pexels.com/photos/4056733/pexels-photo-4056733.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Quad Stretch',
            duration: '30 seconds each leg',
            focus: 'Quadriceps flexibility',
            trackingQuality: 'Good',
            description: 'Hold ankle behind you, use wall for balance if needed',
            trackingKey: 'quad_stretch',
            images: [
              'https://images.pexels.com/photos/4056734/pexels-photo-4056734.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Deep Breathing',
            duration: '1 minute',
            focus: 'Recovery',
            trackingQuality: 'Fair',
            description: 'Slow, deep breaths through nose, exhale through mouth',
            trackingKey: 'breathing',
            images: [
              'https://images.pexels.com/photos/4056735/pexels-photo-4056735.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ]
      },
      {
        day: 2,
        name: 'Upper Body Focus',
        description: 'Strengthen arms, shoulders, and upper back with standing exercises',
        warmup: [
          {
            name: 'Arm Swings',
            duration: '1 minute',
            focus: 'Shoulder warm-up',
            trackingQuality: 'Good',
            description: 'Swing arms forward and backward in controlled motion',
            trackingKey: 'arm_swing',
            images: [
              'https://images.pexels.com/photos/4056736/pexels-photo-4056736.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Shoulder Rolls',
            duration: '1 minute',
            focus: 'Shoulder mobility',
            trackingQuality: 'Good',
            description: 'Roll shoulders backward in large circles',
            trackingKey: 'shoulder_roll',
            images: [
              'https://images.pexels.com/photos/4056737/pexels-photo-4056737.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Neck Stretches',
            duration: '1 minute',
            focus: 'Neck mobility',
            trackingQuality: 'Fair',
            description: 'Gentle side-to-side and up-down neck movements',
            trackingKey: 'neck_stretch',
            images: [
              'https://images.pexels.com/photos/4056738/pexels-photo-4056738.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        mainWorkout: [
          {
            name: 'Wall Push-ups',
            reps: '10-15',
            focus: 'Chest and arms',
            trackingQuality: 'Excellent',
            description: 'Progressive wall push-ups with focus on form',
            trackingKey: 'wall_pushup',
            images: [
              'https://images.pexels.com/photos/4056739/pexels-photo-4056739.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056740/pexels-photo-4056740.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Arm Raises',
            reps: '12-15',
            focus: 'Shoulder strength',
            trackingQuality: 'Excellent',
            description: 'Raise arms to sides and overhead with control',
            trackingKey: 'arm_raise',
            images: [
              'https://images.pexels.com/photos/4056741/pexels-photo-4056741.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Rows',
            reps: '12-15',
            focus: 'Upper back',
            trackingQuality: 'Good',
            description: 'Pull elbows back, squeeze shoulder blades together',
            trackingKey: 'standing_row',
            images: [
              'https://images.pexels.com/photos/4056742/pexels-photo-4056742.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Tricep Extensions',
            reps: '10-12',
            focus: 'Tricep strength',
            trackingQuality: 'Good',
            description: 'Extend arms overhead, lower and raise forearms',
            trackingKey: 'tricep_extension',
            images: [
              'https://images.pexels.com/photos/4056743/pexels-photo-4056743.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        cooldown: [
          {
            name: 'Cross-body Arm Stretch',
            duration: '30 seconds each arm',
            focus: 'Shoulder flexibility',
            trackingQuality: 'Good',
            description: 'Pull arm across chest, hold with opposite hand',
            trackingKey: 'arm_stretch',
            images: [
              'https://images.pexels.com/photos/4056744/pexels-photo-4056744.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Overhead Reach',
            duration: '30 seconds',
            focus: 'Side stretch',
            trackingQuality: 'Good',
            description: 'Reach one arm overhead, lean to opposite side',
            trackingKey: 'overhead_reach',
            images: [
              'https://images.pexels.com/photos/4056745/pexels-photo-4056745.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Gentle Breathing',
            duration: '1 minute',
            focus: 'Recovery',
            trackingQuality: 'Fair',
            description: 'Focus on relaxing upper body with each exhale',
            trackingKey: 'breathing',
            images: [
              'https://images.pexels.com/photos/4056746/pexels-photo-4056746.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ]
      },
      {
        day: 3,
        name: 'Lower Body Strength',
        description: 'Build leg strength and improve balance with standing exercises',
        warmup: [
          {
            name: 'Leg Swings',
            duration: '1 minute each leg',
            focus: 'Hip mobility',
            trackingQuality: 'Good',
            description: 'Hold wall for support, swing leg forward and back',
            trackingKey: 'leg_swing',
            images: [
              'https://images.pexels.com/photos/4056747/pexels-photo-4056747.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Ankle Circles',
            duration: '30 seconds each foot',
            focus: 'Ankle mobility',
            trackingQuality: 'Fair',
            description: 'Lift foot slightly, rotate ankle in circles',
            trackingKey: 'ankle_circle',
            images: [
              'https://images.pexels.com/photos/4056748/pexels-photo-4056748.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Hip Circles',
            duration: '1 minute',
            focus: 'Hip mobility',
            trackingQuality: 'Good',
            description: 'Hands on hips, make large circles with hips',
            trackingKey: 'hip_circle',
            images: [
              'https://images.pexels.com/photos/4056749/pexels-photo-4056749.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        mainWorkout: [
          {
            name: 'Bodyweight Squats',
            reps: '10-15',
            focus: 'Leg strength',
            trackingQuality: 'Excellent',
            description: 'Lower into squat, keep chest up, knees behind toes',
            trackingKey: 'squat',
            images: [
              'https://images.pexels.com/photos/4056750/pexels-photo-4056750.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056751/pexels-photo-4056751.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Lunges',
            reps: '8-10 each leg',
            focus: 'Leg strength and balance',
            trackingQuality: 'Excellent',
            description: 'Step forward into lunge, return to standing',
            trackingKey: 'lunge',
            images: [
              'https://images.pexels.com/photos/4056752/pexels-photo-4056752.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056753/pexels-photo-4056753.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Single Leg Stands',
            duration: '20-30 seconds each leg',
            focus: 'Balance and stability',
            trackingQuality: 'Good',
            description: 'Stand on one leg, use wall for support if needed',
            trackingKey: 'single_leg_stand',
            images: [
              'https://images.pexels.com/photos/4056754/pexels-photo-4056754.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Calf Raises',
            reps: '15-20',
            focus: 'Calf strength',
            trackingQuality: 'Good',
            description: 'Rise up on toes, hold, lower slowly',
            trackingKey: 'calf_raise',
            images: [
              'https://images.pexels.com/photos/4056755/pexels-photo-4056755.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        cooldown: [
          {
            name: 'Standing Calf Stretch',
            duration: '30 seconds each leg',
            focus: 'Calf flexibility',
            trackingQuality: 'Good',
            description: 'Step back, press heel down, lean forward',
            trackingKey: 'calf_stretch',
            images: [
              'https://images.pexels.com/photos/4056756/pexels-photo-4056756.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Figure-4 Stretch',
            duration: '30 seconds each leg',
            focus: 'Hip flexibility',
            trackingQuality: 'Good',
            description: 'Place ankle on opposite knee, sit back gently',
            trackingKey: 'figure_four_stretch',
            images: [
              'https://images.pexels.com/photos/4056757/pexels-photo-4056757.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Deep Breathing',
            duration: '1 minute',
            focus: 'Recovery',
            trackingQuality: 'Fair',
            description: 'Focus on relaxing leg muscles with each breath',
            trackingKey: 'breathing',
            images: [
              'https://images.pexels.com/photos/4056758/pexels-photo-4056758.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ]
      },
      {
        day: 4,
        name: 'Core and Stability',
        description: 'Strengthen core muscles and improve balance with standing exercises',
        warmup: [
          {
            name: 'Standing Marches',
            duration: '2 minutes',
            focus: 'Core activation',
            trackingQuality: 'Excellent',
            description: 'March in place with high knees, engage core',
            trackingKey: 'march_in_place',
            images: [
              'https://images.pexels.com/photos/4056759/pexels-photo-4056759.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Torso Rotations',
            duration: '1 minute',
            focus: 'Spinal mobility',
            trackingQuality: 'Good',
            description: 'Rotate torso side to side with arms crossed',
            trackingKey: 'torso_rotation',
            images: [
              'https://images.pexels.com/photos/4056760/pexels-photo-4056760.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Side Bends',
            duration: '1 minute',
            focus: 'Lateral flexibility',
            trackingQuality: 'Good',
            description: 'Reach one arm overhead, bend to opposite side',
            trackingKey: 'side_bend',
            images: [
              'https://images.pexels.com/photos/4056761/pexels-photo-4056761.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        mainWorkout: [
          {
            name: 'Standing Knee-to-Elbow',
            reps: '10-12 each side',
            focus: 'Core strength',
            trackingQuality: 'Excellent',
            description: 'Bring knee up to meet opposite elbow',
            trackingKey: 'knee_to_elbow',
            images: [
              'https://images.pexels.com/photos/4056762/pexels-photo-4056762.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Side Crunches',
            reps: '12-15 each side',
            focus: 'Oblique strength',
            trackingQuality: 'Good',
            description: 'Lift knee to side while bringing elbow down',
            trackingKey: 'side_crunch',
            images: [
              'https://images.pexels.com/photos/4056763/pexels-photo-4056763.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Plank',
            duration: '20-30 seconds',
            focus: 'Core stability',
            trackingQuality: 'Excellent',
            description: 'Lean against wall in plank position, hold',
            trackingKey: 'standing_plank',
            images: [
              'https://images.pexels.com/photos/4056764/pexels-photo-4056764.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Tree Pose Hold',
            duration: '30 seconds each leg',
            focus: 'Balance and core',
            trackingQuality: 'Good',
            description: 'Stand on one leg, place other foot on inner thigh',
            trackingKey: 'tree_pose',
            images: [
              'https://images.pexels.com/photos/4056765/pexels-photo-4056765.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        cooldown: [
          {
            name: 'Standing Spinal Twist',
            duration: '30 seconds each side',
            focus: 'Spinal mobility',
            trackingQuality: 'Good',
            description: 'Gentle rotation with hands on hips',
            trackingKey: 'spinal_twist',
            images: [
              'https://images.pexels.com/photos/4056766/pexels-photo-4056766.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Cat-Cow',
            duration: '1 minute',
            focus: 'Spinal flexibility',
            trackingQuality: 'Good',
            description: 'Arch and round spine while standing',
            trackingKey: 'cat_cow',
            images: [
              'https://images.pexels.com/photos/4056767/pexels-photo-4056767.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Mindful Breathing',
            duration: '2 minutes',
            focus: 'Recovery and mindfulness',
            trackingQuality: 'Fair',
            description: 'Focus on breath and body awareness',
            trackingKey: 'mindful_breathing',
            images: [
              'https://images.pexels.com/photos/4056768/pexels-photo-4056768.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ]
      },
      {
        day: 5,
        name: 'Full Body Strength',
        description: 'Combine all movement patterns for a complete workout',
        warmup: [
          {
            name: 'Dynamic Warm-up',
            duration: '3 minutes',
            focus: 'Full body preparation',
            trackingQuality: 'Good',
            description: 'Combination of marching, arm swings, and gentle movements',
            trackingKey: 'dynamic_warmup',
            images: [
              'https://images.pexels.com/photos/4056769/pexels-photo-4056769.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        mainWorkout: [
          {
            name: 'Squat to Press',
            reps: '10-12',
            focus: 'Full body strength',
            trackingQuality: 'Excellent',
            description: 'Squat down, stand up while pressing arms overhead',
            trackingKey: 'squat_to_press',
            images: [
              'https://images.pexels.com/photos/4056770/pexels-photo-4056770.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/4056771/pexels-photo-4056771.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Lunge with Twist',
            reps: '8-10 each side',
            focus: 'Legs and core',
            trackingQuality: 'Excellent',
            description: 'Step into lunge, rotate torso toward front leg',
            trackingKey: 'lunge_with_twist',
            images: [
              'https://images.pexels.com/photos/4056772/pexels-photo-4056772.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Standing Push-up to T',
            reps: '8-10',
            focus: 'Upper body and core',
            trackingQuality: 'Good',
            description: 'Wall push-up, then rotate to T position',
            trackingKey: 'pushup_to_t',
            images: [
              'https://images.pexels.com/photos/4056773/pexels-photo-4056773.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Single Leg Deadlift',
            reps: '6-8 each leg',
            focus: 'Balance and posterior chain',
            trackingQuality: 'Good',
            description: 'Hinge at hip on one leg, reach toward floor',
            trackingKey: 'single_leg_deadlift',
            images: [
              'https://images.pexels.com/photos/4056774/pexels-photo-4056774.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        cooldown: [
          {
            name: 'Full Body Stretch Sequence',
            duration: '5 minutes',
            focus: 'Complete flexibility',
            trackingQuality: 'Good',
            description: 'Combination of all previous stretches',
            trackingKey: 'full_body_stretch',
            images: [
              'https://images.pexels.com/photos/4056775/pexels-photo-4056775.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ]
      },
      {
        day: 6,
        name: 'Flexibility and Flow',
        description: 'Focus on mobility, flexibility, and gentle movement',
        warmup: [
          {
            name: 'Gentle Movement Flow',
            duration: '3 minutes',
            focus: 'Joint mobility',
            trackingQuality: 'Good',
            description: 'Slow, controlled movements for all joints',
            trackingKey: 'movement_flow',
            images: [
              'https://images.pexels.com/photos/4056776/pexels-photo-4056776.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        mainWorkout: [
          {
            name: 'Standing Yoga Flow',
            duration: '10 minutes',
            focus: 'Flexibility and balance',
            trackingQuality: 'Good',
            description: 'Flowing sequence of standing yoga poses',
            trackingKey: 'yoga_flow',
            images: [
              'https://images.pexels.com/photos/4056777/pexels-photo-4056777.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Balance Challenge',
            duration: '5 minutes',
            focus: 'Stability and coordination',
            trackingQuality: 'Good',
            description: 'Various balance poses and movements',
            trackingKey: 'balance_challenge',
            images: [
              'https://images.pexels.com/photos/4056778/pexels-photo-4056778.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          },
          {
            name: 'Gentle Strength Maintenance',
            duration: '5 minutes',
            focus: 'Light strength work',
            trackingQuality: 'Good',
            description: 'Easy versions of strength exercises',
            trackingKey: 'gentle_strength',
            images: [
              'https://images.pexels.com/photos/4056779/pexels-photo-4056779.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ],
        cooldown: [
          {
            name: 'Extended Relaxation',
            duration: '5 minutes',
            focus: 'Recovery and mindfulness',
            trackingQuality: 'Fair',
            description: 'Deep breathing and body scan relaxation',
            trackingKey: 'extended_relaxation',
            images: [
              'https://images.pexels.com/photos/4056780/pexels-photo-4056780.jpeg?auto=compress&cs=tinysrgb&w=400'
            ]
          }
        ]
      }
    ]
  }
];

export const workoutTemplates = [
  {
    id: 'quick-cardio',
    name: 'Quick Cardio Blast',
    description: '15-minute high-intensity cardio workout',
    duration: 15,
    difficulty: 'intermediate',
    exercises: [
      { name: 'Jumping Jacks', duration: '45 seconds', rest: '15 seconds' },
      { name: 'High Knees', duration: '45 seconds', rest: '15 seconds' },
      { name: 'Burpees', duration: '30 seconds', rest: '30 seconds' },
      { name: 'Mountain Climbers', duration: '45 seconds', rest: '15 seconds' }
    ]
  },
  {
    id: 'strength-basics',
    name: 'Strength Training Basics',
    description: '30-minute full-body strength workout',
    duration: 30,
    difficulty: 'beginner',
    exercises: [
      { name: 'Push-ups', reps: '8-12', rest: '60 seconds' },
      { name: 'Squats', reps: '12-15', rest: '60 seconds' },
      { name: 'Planks', duration: '30 seconds', rest: '60 seconds' },
      { name: 'Lunges', reps: '10 each leg', rest: '60 seconds' }
    ]
  }
];