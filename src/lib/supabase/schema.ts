export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Artifacters: {
        Row: {
          artifactId: number
          createdAt: string
          id: string
          mainStatId: number
          score: number
          setId: number
          typeId: number
          updatedAt: string
          userId: string
        }
        Insert: {
          artifactId: number
          createdAt?: string
          id?: string
          mainStatId: number
          score: number
          setId: number
          typeId: number
          updatedAt?: string
          userId: string
        }
        Update: {
          artifactId?: number
          createdAt?: string
          id?: string
          mainStatId?: number
          score?: number
          setId?: number
          typeId?: number
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_artifacters_artifactid_fkey"
            columns: ["artifactId"]
            isOneToOne: false
            referencedRelation: "Artifacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Artifacters_artifactId_fkey"
            columns: ["artifactId"]
            isOneToOne: false
            referencedRelation: "ArtifactIcons"
            referencedColumns: ["artifactId"]
          },
          {
            foreignKeyName: "public_artifacters_mainstatid_fkey"
            columns: ["mainStatId"]
            isOneToOne: false
            referencedRelation: "ArtifactMainStats"
            referencedColumns: ["statId"]
          },
          {
            foreignKeyName: "public_Artifacters_mainStatId_fkey"
            columns: ["mainStatId"]
            isOneToOne: false
            referencedRelation: "Stats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_artifacters_setid_fkey"
            columns: ["setId"]
            isOneToOne: false
            referencedRelation: "ArtifactSets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_artifacters_typeid_fkey"
            columns: ["typeId"]
            isOneToOne: false
            referencedRelation: "ArtifactTypes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_artifacters_userid_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      ArtifacterSubOptions: {
        Row: {
          artifacterId: string
          id: string
          statId: number
          value: number
        }
        Insert: {
          artifacterId: string
          id?: string
          statId: number
          value: number
        }
        Update: {
          artifacterId?: string
          id?: string
          statId?: number
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_ArtifacterSubOptions_artifacterId_fkey"
            columns: ["artifacterId"]
            isOneToOne: false
            referencedRelation: "Artifacters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_ArtifacterSubOptions_statId_fkey"
            columns: ["statId"]
            isOneToOne: false
            referencedRelation: "Stats"
            referencedColumns: ["id"]
          },
        ]
      }
      ArtifactIcons: {
        Row: {
          artifactId: number
          url: string
        }
        Insert: {
          artifactId?: number
          url: string
        }
        Update: {
          artifactId?: number
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_ArtifactIcons_artifactId_fkey"
            columns: ["artifactId"]
            isOneToOne: true
            referencedRelation: "Artifacts"
            referencedColumns: ["id"]
          },
        ]
      }
      ArtifactMainStats: {
        Row: {
          star4: number
          star5: number
          statId: number
        }
        Insert: {
          star4: number
          star5: number
          statId?: number
        }
        Update: {
          star4?: number
          star5?: number
          statId?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_ArtifactMainStats_statId_fkey"
            columns: ["statId"]
            isOneToOne: true
            referencedRelation: "Stats"
            referencedColumns: ["id"]
          },
        ]
      }
      Artifacts: {
        Row: {
          description: string
          id: number
          name: string
          setId: number
          star: number
          typeId: number
        }
        Insert: {
          description: string
          id?: number
          name: string
          setId: number
          star: number
          typeId: number
        }
        Update: {
          description?: string
          id?: number
          name?: string
          setId?: number
          star?: number
          typeId?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_Artifacts_setId_fkey"
            columns: ["setId"]
            isOneToOne: false
            referencedRelation: "ArtifactSets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Artifacts_typeId_fkey"
            columns: ["typeId"]
            isOneToOne: false
            referencedRelation: "ArtifactTypes"
            referencedColumns: ["id"]
          },
        ]
      }
      ArtifactSetBonusValues: {
        Row: {
          artifactSetId: number
          id: number
          needCount: number
          statId: number
          value: number
        }
        Insert: {
          artifactSetId: number
          id?: number
          needCount: number
          statId: number
          value: number
        }
        Update: {
          artifactSetId?: number
          id?: number
          needCount?: number
          statId?: number
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_ArtifactSetBonusValues_artifactSetId_fkey"
            columns: ["artifactSetId"]
            isOneToOne: false
            referencedRelation: "ArtifactSets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_ArtifactSetBonusValues_statId_fkey"
            columns: ["statId"]
            isOneToOne: false
            referencedRelation: "Stats"
            referencedColumns: ["id"]
          },
        ]
      }
      ArtifactSets: {
        Row: {
          fourPieceBonuses: string
          id: number
          name: string
          twoPieceBonuses: string
        }
        Insert: {
          fourPieceBonuses: string
          id?: number
          name: string
          twoPieceBonuses: string
        }
        Update: {
          fourPieceBonuses?: string
          id?: number
          name?: string
          twoPieceBonuses?: string
        }
        Relationships: []
      }
      ArtifactTypes: {
        Row: {
          english: string
          id: number
          japanese: string
        }
        Insert: {
          english: string
          id?: number
          japanese: string
        }
        Update: {
          english?: string
          id?: number
          japanese?: string
        }
        Relationships: []
      }
      BuffArtifacts: {
        Row: {
          artifactSetId: number
          needCount: number
        }
        Insert: {
          artifactSetId?: number
          needCount: number
        }
        Update: {
          artifactSetId?: number
          needCount?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_BuffArtifacts_artifactSetId_fkey"
            columns: ["artifactSetId"]
            isOneToOne: true
            referencedRelation: "ArtifactSets"
            referencedColumns: ["id"]
          },
        ]
      }
      BuffCharacters: {
        Row: {
          characterId: number
          description: string
          id: number
          title: string
        }
        Insert: {
          characterId: number
          description: string
          id?: number
          title: string
        }
        Update: {
          characterId?: number
          description?: string
          id?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_BuffCharacters_characterId_fkey"
            columns: ["characterId"]
            isOneToOne: false
            referencedRelation: "Characters"
            referencedColumns: ["id"]
          },
        ]
      }
      BuffElementalResonances: {
        Row: {
          description: string
          id: number
          title: string
        }
        Insert: {
          description: string
          id?: number
          title: string
        }
        Update: {
          description?: string
          id?: number
          title?: string
        }
        Relationships: []
      }
      BuffWeapons: {
        Row: {
          series: string | null
          weaponId: number
        }
        Insert: {
          series?: string | null
          weaponId?: number
        }
        Update: {
          series?: string | null
          weaponId?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_BuffWeapons_weaponId_fkey"
            columns: ["weaponId"]
            isOneToOne: true
            referencedRelation: "Weapons"
            referencedColumns: ["id"]
          },
        ]
      }
      CharacterAscensionBonusStats: {
        Row: {
          id: number
          level1_20: number
          level10_20: number
          level11_20: number
          level12_20: number
          level13_20: number
          level14_20: number
          level15_20: number
          level16_20: number
          level17_20: number
          level18_20: number
          level19_20: number
          level2_20: number
          level20_20: number
          level20_40: number
          level21_40: number
          level22_40: number
          level23_40: number
          level24_40: number
          level25_40: number
          level26_40: number
          level27_40: number
          level28_40: number
          level29_40: number
          level3_20: number
          level30_40: number
          level31_40: number
          level32_40: number
          level33_40: number
          level34_40: number
          level35_40: number
          level36_40: number
          level37_40: number
          level38_40: number
          level39_40: number
          level4_20: number
          level40_40: number
          level40_50: number
          level41_50: number
          level42_50: number
          level43_50: number
          level44_50: number
          level45_50: number
          level46_50: number
          level47_50: number
          level48_50: number
          level49_50: number
          level5_20: number
          level50_50: number
          level50_60: number
          level51_60: number
          level52_60: number
          level53_60: number
          level54_60: number
          level55_60: number
          level56_60: number
          level57_60: number
          level58_60: number
          level59_60: number
          level6_20: number
          level60_60: number
          level60_70: number
          level61_70: number
          level62_70: number
          level63_70: number
          level64_70: number
          level65_70: number
          level66_70: number
          level67_70: number
          level68_70: number
          level69_70: number
          level7_20: number
          level70_70: number
          level70_80: number
          level71_80: number
          level72_80: number
          level73_80: number
          level74_80: number
          level75_80: number
          level76_80: number
          level77_80: number
          level78_80: number
          level79_80: number
          level8_20: number
          level80_80: number
          level80_90: number
          level81_90: number
          level82_90: number
          level83_90: number
          level84_90: number
          level85_90: number
          level86_90: number
          level87_90: number
          level88_90: number
          level89_90: number
          level9_20: number
          level90_90: number
          statId: number
        }
        Insert: {
          id: number
          level1_20: number
          level10_20: number
          level11_20: number
          level12_20: number
          level13_20: number
          level14_20: number
          level15_20: number
          level16_20: number
          level17_20: number
          level18_20: number
          level19_20: number
          level2_20: number
          level20_20: number
          level20_40: number
          level21_40: number
          level22_40: number
          level23_40: number
          level24_40: number
          level25_40: number
          level26_40: number
          level27_40: number
          level28_40: number
          level29_40: number
          level3_20: number
          level30_40: number
          level31_40: number
          level32_40: number
          level33_40: number
          level34_40: number
          level35_40: number
          level36_40: number
          level37_40: number
          level38_40: number
          level39_40: number
          level4_20: number
          level40_40: number
          level40_50: number
          level41_50: number
          level42_50: number
          level43_50: number
          level44_50: number
          level45_50: number
          level46_50: number
          level47_50: number
          level48_50: number
          level49_50: number
          level5_20: number
          level50_50: number
          level50_60: number
          level51_60: number
          level52_60: number
          level53_60: number
          level54_60: number
          level55_60: number
          level56_60: number
          level57_60: number
          level58_60: number
          level59_60: number
          level6_20: number
          level60_60: number
          level60_70: number
          level61_70: number
          level62_70: number
          level63_70: number
          level64_70: number
          level65_70: number
          level66_70: number
          level67_70: number
          level68_70: number
          level69_70: number
          level7_20: number
          level70_70: number
          level70_80: number
          level71_80: number
          level72_80: number
          level73_80: number
          level74_80: number
          level75_80: number
          level76_80: number
          level77_80: number
          level78_80: number
          level79_80: number
          level8_20: number
          level80_80: number
          level80_90: number
          level81_90: number
          level82_90: number
          level83_90: number
          level84_90: number
          level85_90: number
          level86_90: number
          level87_90: number
          level88_90: number
          level89_90: number
          level9_20: number
          level90_90: number
          statId: number
        }
        Update: {
          id?: number
          level1_20?: number
          level10_20?: number
          level11_20?: number
          level12_20?: number
          level13_20?: number
          level14_20?: number
          level15_20?: number
          level16_20?: number
          level17_20?: number
          level18_20?: number
          level19_20?: number
          level2_20?: number
          level20_20?: number
          level20_40?: number
          level21_40?: number
          level22_40?: number
          level23_40?: number
          level24_40?: number
          level25_40?: number
          level26_40?: number
          level27_40?: number
          level28_40?: number
          level29_40?: number
          level3_20?: number
          level30_40?: number
          level31_40?: number
          level32_40?: number
          level33_40?: number
          level34_40?: number
          level35_40?: number
          level36_40?: number
          level37_40?: number
          level38_40?: number
          level39_40?: number
          level4_20?: number
          level40_40?: number
          level40_50?: number
          level41_50?: number
          level42_50?: number
          level43_50?: number
          level44_50?: number
          level45_50?: number
          level46_50?: number
          level47_50?: number
          level48_50?: number
          level49_50?: number
          level5_20?: number
          level50_50?: number
          level50_60?: number
          level51_60?: number
          level52_60?: number
          level53_60?: number
          level54_60?: number
          level55_60?: number
          level56_60?: number
          level57_60?: number
          level58_60?: number
          level59_60?: number
          level6_20?: number
          level60_60?: number
          level60_70?: number
          level61_70?: number
          level62_70?: number
          level63_70?: number
          level64_70?: number
          level65_70?: number
          level66_70?: number
          level67_70?: number
          level68_70?: number
          level69_70?: number
          level7_20?: number
          level70_70?: number
          level70_80?: number
          level71_80?: number
          level72_80?: number
          level73_80?: number
          level74_80?: number
          level75_80?: number
          level76_80?: number
          level77_80?: number
          level78_80?: number
          level79_80?: number
          level8_20?: number
          level80_80?: number
          level80_90?: number
          level81_90?: number
          level82_90?: number
          level83_90?: number
          level84_90?: number
          level85_90?: number
          level86_90?: number
          level87_90?: number
          level88_90?: number
          level89_90?: number
          level9_20?: number
          level90_90?: number
          statId?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_CharacterAscensionBonusStats_StatId_fkey"
            columns: ["statId"]
            isOneToOne: false
            referencedRelation: "Stats"
            referencedColumns: ["id"]
          },
        ]
      }
      CharacterBaseAttacks: {
        Row: {
          characterId: number
          level1_20: number
          level10_20: number
          level11_20: number
          level12_20: number
          level13_20: number
          level14_20: number
          level15_20: number
          level16_20: number
          level17_20: number
          level18_20: number
          level19_20: number
          level2_20: number
          level20_20: number
          level20_40: number
          level21_40: number
          level22_40: number
          level23_40: number
          level24_40: number
          level25_40: number
          level26_40: number
          level27_40: number
          level28_40: number
          level29_40: number
          level3_20: number
          level30_40: number
          level31_40: number
          level32_40: number
          level33_40: number
          level34_40: number
          level35_40: number
          level36_40: number
          level37_40: number
          level38_40: number
          level39_40: number
          level4_20: number
          level40_40: number
          level40_50: number
          level41_50: number
          level42_50: number
          level43_50: number
          level44_50: number
          level45_50: number
          level46_50: number
          level47_50: number
          level48_50: number
          level49_50: number
          level5_20: number
          level50_50: number
          level50_60: number
          level51_60: number
          level52_60: number
          level53_60: number
          level54_60: number
          level55_60: number
          level56_60: number
          level57_60: number
          level58_60: number
          level59_60: number
          level6_20: number
          level60_60: number
          level60_70: number
          level61_70: number
          level62_70: number
          level63_70: number
          level64_70: number
          level65_70: number
          level66_70: number
          level67_70: number
          level68_70: number
          level69_70: number
          level7_20: number
          level70_70: number
          level70_80: number
          level71_80: number
          level72_80: number
          level73_80: number
          level74_80: number
          level75_80: number
          level76_80: number
          level77_80: number
          level78_80: number
          level79_80: number
          level8_20: number
          level80_80: number
          level80_90: number
          level81_90: number
          level82_90: number
          level83_90: number
          level84_90: number
          level85_90: number
          level86_90: number
          level87_90: number
          level88_90: number
          level89_90: number
          level9_20: number
          level90_90: number
        }
        Insert: {
          characterId: number
          level1_20: number
          level10_20: number
          level11_20: number
          level12_20: number
          level13_20: number
          level14_20: number
          level15_20: number
          level16_20: number
          level17_20: number
          level18_20: number
          level19_20: number
          level2_20: number
          level20_20: number
          level20_40: number
          level21_40: number
          level22_40: number
          level23_40: number
          level24_40: number
          level25_40: number
          level26_40: number
          level27_40: number
          level28_40: number
          level29_40: number
          level3_20: number
          level30_40: number
          level31_40: number
          level32_40: number
          level33_40: number
          level34_40: number
          level35_40: number
          level36_40: number
          level37_40: number
          level38_40: number
          level39_40: number
          level4_20: number
          level40_40: number
          level40_50: number
          level41_50: number
          level42_50: number
          level43_50: number
          level44_50: number
          level45_50: number
          level46_50: number
          level47_50: number
          level48_50: number
          level49_50: number
          level5_20: number
          level50_50: number
          level50_60: number
          level51_60: number
          level52_60: number
          level53_60: number
          level54_60: number
          level55_60: number
          level56_60: number
          level57_60: number
          level58_60: number
          level59_60: number
          level6_20: number
          level60_60: number
          level60_70: number
          level61_70: number
          level62_70: number
          level63_70: number
          level64_70: number
          level65_70: number
          level66_70: number
          level67_70: number
          level68_70: number
          level69_70: number
          level7_20: number
          level70_70: number
          level70_80: number
          level71_80: number
          level72_80: number
          level73_80: number
          level74_80: number
          level75_80: number
          level76_80: number
          level77_80: number
          level78_80: number
          level79_80: number
          level8_20: number
          level80_80: number
          level80_90: number
          level81_90: number
          level82_90: number
          level83_90: number
          level84_90: number
          level85_90: number
          level86_90: number
          level87_90: number
          level88_90: number
          level89_90: number
          level9_20: number
          level90_90: number
        }
        Update: {
          characterId?: number
          level1_20?: number
          level10_20?: number
          level11_20?: number
          level12_20?: number
          level13_20?: number
          level14_20?: number
          level15_20?: number
          level16_20?: number
          level17_20?: number
          level18_20?: number
          level19_20?: number
          level2_20?: number
          level20_20?: number
          level20_40?: number
          level21_40?: number
          level22_40?: number
          level23_40?: number
          level24_40?: number
          level25_40?: number
          level26_40?: number
          level27_40?: number
          level28_40?: number
          level29_40?: number
          level3_20?: number
          level30_40?: number
          level31_40?: number
          level32_40?: number
          level33_40?: number
          level34_40?: number
          level35_40?: number
          level36_40?: number
          level37_40?: number
          level38_40?: number
          level39_40?: number
          level4_20?: number
          level40_40?: number
          level40_50?: number
          level41_50?: number
          level42_50?: number
          level43_50?: number
          level44_50?: number
          level45_50?: number
          level46_50?: number
          level47_50?: number
          level48_50?: number
          level49_50?: number
          level5_20?: number
          level50_50?: number
          level50_60?: number
          level51_60?: number
          level52_60?: number
          level53_60?: number
          level54_60?: number
          level55_60?: number
          level56_60?: number
          level57_60?: number
          level58_60?: number
          level59_60?: number
          level6_20?: number
          level60_60?: number
          level60_70?: number
          level61_70?: number
          level62_70?: number
          level63_70?: number
          level64_70?: number
          level65_70?: number
          level66_70?: number
          level67_70?: number
          level68_70?: number
          level69_70?: number
          level7_20?: number
          level70_70?: number
          level70_80?: number
          level71_80?: number
          level72_80?: number
          level73_80?: number
          level74_80?: number
          level75_80?: number
          level76_80?: number
          level77_80?: number
          level78_80?: number
          level79_80?: number
          level8_20?: number
          level80_80?: number
          level80_90?: number
          level81_90?: number
          level82_90?: number
          level83_90?: number
          level84_90?: number
          level85_90?: number
          level86_90?: number
          level87_90?: number
          level88_90?: number
          level89_90?: number
          level9_20?: number
          level90_90?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_CharacterBaseattacks_characterId_fkey"
            columns: ["characterId"]
            isOneToOne: true
            referencedRelation: "Characters"
            referencedColumns: ["id"]
          },
        ]
      }
      CharacterBaseDefenses: {
        Row: {
          characterId: number
          level1_20: number
          level10_20: number
          level11_20: number
          level12_20: number
          level13_20: number
          level14_20: number
          level15_20: number
          level16_20: number
          level17_20: number
          level18_20: number
          level19_20: number
          level2_20: number
          level20_20: number
          level20_40: number
          level21_40: number
          level22_40: number
          level23_40: number
          level24_40: number
          level25_40: number
          level26_40: number
          level27_40: number
          level28_40: number
          level29_40: number
          level3_20: number
          level30_40: number
          level31_40: number
          level32_40: number
          level33_40: number
          level34_40: number
          level35_40: number
          level36_40: number
          level37_40: number
          level38_40: number
          level39_40: number
          level4_20: number
          level40_40: number
          level40_50: number
          level41_50: number
          level42_50: number
          level43_50: number
          level44_50: number
          level45_50: number
          level46_50: number
          level47_50: number
          level48_50: number
          level49_50: number
          level5_20: number
          level50_50: number
          level50_60: number
          level51_60: number
          level52_60: number
          level53_60: number
          level54_60: number
          level55_60: number
          level56_60: number
          level57_60: number
          level58_60: number
          level59_60: number
          level6_20: number
          level60_60: number
          level60_70: number
          level61_70: number
          level62_70: number
          level63_70: number
          level64_70: number
          level65_70: number
          level66_70: number
          level67_70: number
          level68_70: number
          level69_70: number
          level7_20: number
          level70_70: number
          level70_80: number
          level71_80: number
          level72_80: number
          level73_80: number
          level74_80: number
          level75_80: number
          level76_80: number
          level77_80: number
          level78_80: number
          level79_80: number
          level8_20: number
          level80_80: number
          level80_90: number
          level81_90: number
          level82_90: number
          level83_90: number
          level84_90: number
          level85_90: number
          level86_90: number
          level87_90: number
          level88_90: number
          level89_90: number
          level9_20: number
          level90_90: number
        }
        Insert: {
          characterId: number
          level1_20: number
          level10_20: number
          level11_20: number
          level12_20: number
          level13_20: number
          level14_20: number
          level15_20: number
          level16_20: number
          level17_20: number
          level18_20: number
          level19_20: number
          level2_20: number
          level20_20: number
          level20_40: number
          level21_40: number
          level22_40: number
          level23_40: number
          level24_40: number
          level25_40: number
          level26_40: number
          level27_40: number
          level28_40: number
          level29_40: number
          level3_20: number
          level30_40: number
          level31_40: number
          level32_40: number
          level33_40: number
          level34_40: number
          level35_40: number
          level36_40: number
          level37_40: number
          level38_40: number
          level39_40: number
          level4_20: number
          level40_40: number
          level40_50: number
          level41_50: number
          level42_50: number
          level43_50: number
          level44_50: number
          level45_50: number
          level46_50: number
          level47_50: number
          level48_50: number
          level49_50: number
          level5_20: number
          level50_50: number
          level50_60: number
          level51_60: number
          level52_60: number
          level53_60: number
          level54_60: number
          level55_60: number
          level56_60: number
          level57_60: number
          level58_60: number
          level59_60: number
          level6_20: number
          level60_60: number
          level60_70: number
          level61_70: number
          level62_70: number
          level63_70: number
          level64_70: number
          level65_70: number
          level66_70: number
          level67_70: number
          level68_70: number
          level69_70: number
          level7_20: number
          level70_70: number
          level70_80: number
          level71_80: number
          level72_80: number
          level73_80: number
          level74_80: number
          level75_80: number
          level76_80: number
          level77_80: number
          level78_80: number
          level79_80: number
          level8_20: number
          level80_80: number
          level80_90: number
          level81_90: number
          level82_90: number
          level83_90: number
          level84_90: number
          level85_90: number
          level86_90: number
          level87_90: number
          level88_90: number
          level89_90: number
          level9_20: number
          level90_90: number
        }
        Update: {
          characterId?: number
          level1_20?: number
          level10_20?: number
          level11_20?: number
          level12_20?: number
          level13_20?: number
          level14_20?: number
          level15_20?: number
          level16_20?: number
          level17_20?: number
          level18_20?: number
          level19_20?: number
          level2_20?: number
          level20_20?: number
          level20_40?: number
          level21_40?: number
          level22_40?: number
          level23_40?: number
          level24_40?: number
          level25_40?: number
          level26_40?: number
          level27_40?: number
          level28_40?: number
          level29_40?: number
          level3_20?: number
          level30_40?: number
          level31_40?: number
          level32_40?: number
          level33_40?: number
          level34_40?: number
          level35_40?: number
          level36_40?: number
          level37_40?: number
          level38_40?: number
          level39_40?: number
          level4_20?: number
          level40_40?: number
          level40_50?: number
          level41_50?: number
          level42_50?: number
          level43_50?: number
          level44_50?: number
          level45_50?: number
          level46_50?: number
          level47_50?: number
          level48_50?: number
          level49_50?: number
          level5_20?: number
          level50_50?: number
          level50_60?: number
          level51_60?: number
          level52_60?: number
          level53_60?: number
          level54_60?: number
          level55_60?: number
          level56_60?: number
          level57_60?: number
          level58_60?: number
          level59_60?: number
          level6_20?: number
          level60_60?: number
          level60_70?: number
          level61_70?: number
          level62_70?: number
          level63_70?: number
          level64_70?: number
          level65_70?: number
          level66_70?: number
          level67_70?: number
          level68_70?: number
          level69_70?: number
          level7_20?: number
          level70_70?: number
          level70_80?: number
          level71_80?: number
          level72_80?: number
          level73_80?: number
          level74_80?: number
          level75_80?: number
          level76_80?: number
          level77_80?: number
          level78_80?: number
          level79_80?: number
          level8_20?: number
          level80_80?: number
          level80_90?: number
          level81_90?: number
          level82_90?: number
          level83_90?: number
          level84_90?: number
          level85_90?: number
          level86_90?: number
          level87_90?: number
          level88_90?: number
          level89_90?: number
          level9_20?: number
          level90_90?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_CharacterBaseDefenses_characterId_fkey"
            columns: ["characterId"]
            isOneToOne: true
            referencedRelation: "Characters"
            referencedColumns: ["id"]
          },
        ]
      }
      CharacterBaseHps: {
        Row: {
          characterId: number
          level1_20: number
          level10_20: number
          level11_20: number
          level12_20: number
          level13_20: number
          level14_20: number
          level15_20: number
          level16_20: number
          level17_20: number
          level18_20: number
          level19_20: number
          level2_20: number
          level20_20: number
          level20_40: number
          level21_40: number
          level22_40: number
          level23_40: number
          level24_40: number
          level25_40: number
          level26_40: number
          level27_40: number
          level28_40: number
          level29_40: number
          level3_20: number
          level30_40: number
          level31_40: number
          level32_40: number
          level33_40: number
          level34_40: number
          level35_40: number
          level36_40: number
          level37_40: number
          level38_40: number
          level39_40: number
          level4_20: number
          level40_40: number
          level40_50: number
          level41_50: number
          level42_50: number
          level43_50: number
          level44_50: number
          level45_50: number
          level46_50: number
          level47_50: number
          level48_50: number
          level49_50: number
          level5_20: number
          level50_50: number
          level50_60: number
          level51_60: number
          level52_60: number
          level53_60: number
          level54_60: number
          level55_60: number
          level56_60: number
          level57_60: number
          level58_60: number
          level59_60: number
          level6_20: number
          level60_60: number
          level60_70: number
          level61_70: number
          level62_70: number
          level63_70: number
          level64_70: number
          level65_70: number
          level66_70: number
          level67_70: number
          level68_70: number
          level69_70: number
          level7_20: number
          level70_70: number
          level70_80: number
          level71_80: number
          level72_80: number
          level73_80: number
          level74_80: number
          level75_80: number
          level76_80: number
          level77_80: number
          level78_80: number
          level79_80: number
          level8_20: number
          level80_80: number
          level80_90: number
          level81_90: number
          level82_90: number
          level83_90: number
          level84_90: number
          level85_90: number
          level86_90: number
          level87_90: number
          level88_90: number
          level89_90: number
          level9_20: number
          level90_90: number
        }
        Insert: {
          characterId: number
          level1_20: number
          level10_20: number
          level11_20: number
          level12_20: number
          level13_20: number
          level14_20: number
          level15_20: number
          level16_20: number
          level17_20: number
          level18_20: number
          level19_20: number
          level2_20: number
          level20_20: number
          level20_40: number
          level21_40: number
          level22_40: number
          level23_40: number
          level24_40: number
          level25_40: number
          level26_40: number
          level27_40: number
          level28_40: number
          level29_40: number
          level3_20: number
          level30_40: number
          level31_40: number
          level32_40: number
          level33_40: number
          level34_40: number
          level35_40: number
          level36_40: number
          level37_40: number
          level38_40: number
          level39_40: number
          level4_20: number
          level40_40: number
          level40_50: number
          level41_50: number
          level42_50: number
          level43_50: number
          level44_50: number
          level45_50: number
          level46_50: number
          level47_50: number
          level48_50: number
          level49_50: number
          level5_20: number
          level50_50: number
          level50_60: number
          level51_60: number
          level52_60: number
          level53_60: number
          level54_60: number
          level55_60: number
          level56_60: number
          level57_60: number
          level58_60: number
          level59_60: number
          level6_20: number
          level60_60: number
          level60_70: number
          level61_70: number
          level62_70: number
          level63_70: number
          level64_70: number
          level65_70: number
          level66_70: number
          level67_70: number
          level68_70: number
          level69_70: number
          level7_20: number
          level70_70: number
          level70_80: number
          level71_80: number
          level72_80: number
          level73_80: number
          level74_80: number
          level75_80: number
          level76_80: number
          level77_80: number
          level78_80: number
          level79_80: number
          level8_20: number
          level80_80: number
          level80_90: number
          level81_90: number
          level82_90: number
          level83_90: number
          level84_90: number
          level85_90: number
          level86_90: number
          level87_90: number
          level88_90: number
          level89_90: number
          level9_20: number
          level90_90: number
        }
        Update: {
          characterId?: number
          level1_20?: number
          level10_20?: number
          level11_20?: number
          level12_20?: number
          level13_20?: number
          level14_20?: number
          level15_20?: number
          level16_20?: number
          level17_20?: number
          level18_20?: number
          level19_20?: number
          level2_20?: number
          level20_20?: number
          level20_40?: number
          level21_40?: number
          level22_40?: number
          level23_40?: number
          level24_40?: number
          level25_40?: number
          level26_40?: number
          level27_40?: number
          level28_40?: number
          level29_40?: number
          level3_20?: number
          level30_40?: number
          level31_40?: number
          level32_40?: number
          level33_40?: number
          level34_40?: number
          level35_40?: number
          level36_40?: number
          level37_40?: number
          level38_40?: number
          level39_40?: number
          level4_20?: number
          level40_40?: number
          level40_50?: number
          level41_50?: number
          level42_50?: number
          level43_50?: number
          level44_50?: number
          level45_50?: number
          level46_50?: number
          level47_50?: number
          level48_50?: number
          level49_50?: number
          level5_20?: number
          level50_50?: number
          level50_60?: number
          level51_60?: number
          level52_60?: number
          level53_60?: number
          level54_60?: number
          level55_60?: number
          level56_60?: number
          level57_60?: number
          level58_60?: number
          level59_60?: number
          level6_20?: number
          level60_60?: number
          level60_70?: number
          level61_70?: number
          level62_70?: number
          level63_70?: number
          level64_70?: number
          level65_70?: number
          level66_70?: number
          level67_70?: number
          level68_70?: number
          level69_70?: number
          level7_20?: number
          level70_70?: number
          level70_80?: number
          level71_80?: number
          level72_80?: number
          level73_80?: number
          level74_80?: number
          level75_80?: number
          level76_80?: number
          level77_80?: number
          level78_80?: number
          level79_80?: number
          level8_20?: number
          level80_80?: number
          level80_90?: number
          level81_90?: number
          level82_90?: number
          level83_90?: number
          level84_90?: number
          level85_90?: number
          level86_90?: number
          level87_90?: number
          level88_90?: number
          level89_90?: number
          level9_20?: number
          level90_90?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_CharacterBaseHps_characterId_fkey"
            columns: ["characterId"]
            isOneToOne: true
            referencedRelation: "Characters"
            referencedColumns: ["id"]
          },
        ]
      }
      CharacterImageUrls: {
        Row: {
          characterId: number
          gacha: string
          icon: string
        }
        Insert: {
          characterId?: number
          gacha: string
          icon: string
        }
        Update: {
          characterId?: number
          gacha?: string
          icon?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_CharacterImageUrls_characterId_fkey"
            columns: ["characterId"]
            isOneToOne: true
            referencedRelation: "Characters"
            referencedColumns: ["id"]
          },
        ]
      }
      Characters: {
        Row: {
          affiliation: string | null
          ascensionBonusStatId: number
          birthday: string | null
          constellation: string
          description: string | null
          genderId: number | null
          id: number
          name: string
          regionId: number | null
          signatureWeaponId: number | null
          star: number
          title: string | null
          visionId: number
          weaponTypeId: number
        }
        Insert: {
          affiliation?: string | null
          ascensionBonusStatId: number
          birthday?: string | null
          constellation: string
          description?: string | null
          genderId?: number | null
          id?: number
          name: string
          regionId?: number | null
          signatureWeaponId?: number | null
          star: number
          title?: string | null
          visionId: number
          weaponTypeId: number
        }
        Update: {
          affiliation?: string | null
          ascensionBonusStatId?: number
          birthday?: string | null
          constellation?: string
          description?: string | null
          genderId?: number | null
          id?: number
          name?: string
          regionId?: number | null
          signatureWeaponId?: number | null
          star?: number
          title?: string | null
          visionId?: number
          weaponTypeId?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_Characters_ascensionBonusStatId_fkey"
            columns: ["ascensionBonusStatId"]
            isOneToOne: false
            referencedRelation: "CharacterAscensionBonusStats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Characters_genderId_fkey"
            columns: ["genderId"]
            isOneToOne: false
            referencedRelation: "Genders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Characters_regionId_fkey"
            columns: ["regionId"]
            isOneToOne: false
            referencedRelation: "Regions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Characters_signatureWeaponId_fkey"
            columns: ["signatureWeaponId"]
            isOneToOne: false
            referencedRelation: "Weapons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Characters_visionId_fkey"
            columns: ["visionId"]
            isOneToOne: false
            referencedRelation: "Visions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Characters_weaponTypeId_fkey"
            columns: ["weaponTypeId"]
            isOneToOne: false
            referencedRelation: "WeaponTypes"
            referencedColumns: ["id"]
          },
        ]
      }
      Constellations: {
        Row: {
          characterId: number
          description: string
          iconUrl: string
          id: number
          rank: number
          title: string
        }
        Insert: {
          characterId: number
          description: string
          iconUrl: string
          id?: number
          rank: number
          title: string
        }
        Update: {
          characterId?: number
          description?: string
          iconUrl?: string
          id?: number
          rank?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_Constellations_characterId_fkey"
            columns: ["characterId"]
            isOneToOne: false
            referencedRelation: "Characters"
            referencedColumns: ["id"]
          },
        ]
      }
      ElementalBurstData: {
        Row: {
          id: number
          level1: number
          level10: number
          level11: number
          level12: number
          level13: number
          level14: number
          level15: number
          level2: number
          level3: number
          level4: number
          level5: number
          level6: number
          level7: number
          level8: number
          level9: number
          nameId: number
          percent: boolean
        }
        Insert: {
          id?: number
          level1: number
          level10: number
          level11: number
          level12: number
          level13: number
          level14: number
          level15: number
          level2: number
          level3: number
          level4: number
          level5: number
          level6: number
          level7: number
          level8: number
          level9: number
          nameId: number
          percent: boolean
        }
        Update: {
          id?: number
          level1?: number
          level10?: number
          level11?: number
          level12?: number
          level13?: number
          level14?: number
          level15?: number
          level2?: number
          level3?: number
          level4?: number
          level5?: number
          level6?: number
          level7?: number
          level8?: number
          level9?: number
          nameId?: number
          percent?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "public_ElementalBurstData_nameId_fkey"
            columns: ["nameId"]
            isOneToOne: false
            referencedRelation: "ElementalBurstTextData"
            referencedColumns: ["id"]
          },
        ]
      }
      ElementalBursts: {
        Row: {
          characterId: number
          description: string
          iconUrl: string
          maxCharge: number
          title: string
        }
        Insert: {
          characterId?: number
          description: string
          iconUrl: string
          maxCharge: number
          title: string
        }
        Update: {
          characterId?: number
          description?: string
          iconUrl?: string
          maxCharge?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_elementalbursts_characterid_fkey"
            columns: ["characterId"]
            isOneToOne: true
            referencedRelation: "Characters"
            referencedColumns: ["id"]
          },
        ]
      }
      ElementalBurstTextData: {
        Row: {
          characterId: number
          id: number
          level1: string
          level10: string
          level11: string
          level12: string
          level13: string
          level14: string
          level15: string
          level2: string
          level3: string
          level4: string
          level5: string
          level6: string
          level7: string
          level8: string
          level9: string
          name: string
        }
        Insert: {
          characterId: number
          id?: number
          level1: string
          level10: string
          level11: string
          level12: string
          level13: string
          level14: string
          level15: string
          level2: string
          level3: string
          level4: string
          level5: string
          level6: string
          level7: string
          level8: string
          level9: string
          name: string
        }
        Update: {
          characterId?: number
          id?: number
          level1?: string
          level10?: string
          level11?: string
          level12?: string
          level13?: string
          level14?: string
          level15?: string
          level2?: string
          level3?: string
          level4?: string
          level5?: string
          level6?: string
          level7?: string
          level8?: string
          level9?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_elementalbursttextdata_characterid_fkey"
            columns: ["characterId"]
            isOneToOne: false
            referencedRelation: "Characters"
            referencedColumns: ["id"]
          },
        ]
      }
      ElementalSkillData: {
        Row: {
          id: number
          level1: number
          level10: number
          level11: number
          level12: number
          level13: number
          level14: number
          level15: number
          level2: number
          level3: number
          level4: number
          level5: number
          level6: number
          level7: number
          level8: number
          level9: number
          nameId: number
          percent: boolean
        }
        Insert: {
          id?: number
          level1: number
          level10: number
          level11: number
          level12: number
          level13: number
          level14: number
          level15: number
          level2: number
          level3: number
          level4: number
          level5: number
          level6: number
          level7: number
          level8: number
          level9: number
          nameId: number
          percent: boolean
        }
        Update: {
          id?: number
          level1?: number
          level10?: number
          level11?: number
          level12?: number
          level13?: number
          level14?: number
          level15?: number
          level2?: number
          level3?: number
          level4?: number
          level5?: number
          level6?: number
          level7?: number
          level8?: number
          level9?: number
          nameId?: number
          percent?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "public_ElementalSkillData_nameId_fkey"
            columns: ["nameId"]
            isOneToOne: false
            referencedRelation: "ElementalSkillTextData"
            referencedColumns: ["id"]
          },
        ]
      }
      ElementalSkills: {
        Row: {
          characterId: number
          description: string
          iconUrl: string
          maxCharge: number
          title: string
        }
        Insert: {
          characterId?: number
          description: string
          iconUrl: string
          maxCharge: number
          title: string
        }
        Update: {
          characterId?: number
          description?: string
          iconUrl?: string
          maxCharge?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_elementalskills_characterid_fkey"
            columns: ["characterId"]
            isOneToOne: true
            referencedRelation: "Characters"
            referencedColumns: ["id"]
          },
        ]
      }
      ElementalSkillTextData: {
        Row: {
          characterId: number
          id: number
          level1: string
          level10: string
          level11: string
          level12: string
          level13: string
          level14: string
          level15: string
          level2: string
          level3: string
          level4: string
          level5: string
          level6: string
          level7: string
          level8: string
          level9: string
          name: string
        }
        Insert: {
          characterId: number
          id?: number
          level1: string
          level10: string
          level11: string
          level12: string
          level13: string
          level14: string
          level15: string
          level2: string
          level3: string
          level4: string
          level5: string
          level6: string
          level7: string
          level8: string
          level9: string
          name: string
        }
        Update: {
          characterId?: number
          id?: number
          level1?: string
          level10?: string
          level11?: string
          level12?: string
          level13?: string
          level14?: string
          level15?: string
          level2?: string
          level3?: string
          level4?: string
          level5?: string
          level6?: string
          level7?: string
          level8?: string
          level9?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_elementalskilltextdata_characterid_fkey"
            columns: ["characterId"]
            isOneToOne: false
            referencedRelation: "Characters"
            referencedColumns: ["id"]
          },
        ]
      }
      Genders: {
        Row: {
          english: string
          id: number
          japanese: string
        }
        Insert: {
          english: string
          id?: number
          japanese: string
        }
        Update: {
          english?: string
          id?: number
          japanese?: string
        }
        Relationships: []
      }
      Levels: {
        Row: {
          ascensionRank: number
          id: number
          level: number
          value: string
          valueText: string
        }
        Insert: {
          ascensionRank: number
          id?: number
          level: number
          value: string
          valueText: string
        }
        Update: {
          ascensionRank?: number
          id?: number
          level?: number
          value?: string
          valueText?: string
        }
        Relationships: []
      }
      NormalAttackData: {
        Row: {
          id: number
          level1: number
          level10: number
          level11: number
          level12: number
          level13: number
          level14: number
          level15: number
          level2: number
          level3: number
          level4: number
          level5: number
          level6: number
          level7: number
          level8: number
          level9: number
          nameId: number
        }
        Insert: {
          id?: number
          level1: number
          level10: number
          level11: number
          level12: number
          level13: number
          level14: number
          level15: number
          level2: number
          level3: number
          level4: number
          level5: number
          level6: number
          level7: number
          level8: number
          level9: number
          nameId: number
        }
        Update: {
          id?: number
          level1?: number
          level10?: number
          level11?: number
          level12?: number
          level13?: number
          level14?: number
          level15?: number
          level2?: number
          level3?: number
          level4?: number
          level5?: number
          level6?: number
          level7?: number
          level8?: number
          level9?: number
          nameId?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_NormalAttackData_nameId_fkey"
            columns: ["nameId"]
            isOneToOne: false
            referencedRelation: "NormalAttackTextData"
            referencedColumns: ["id"]
          },
        ]
      }
      NormalAttacks: {
        Row: {
          characterId: number
          description: string
          iconUrl: string
          title: string
        }
        Insert: {
          characterId?: number
          description: string
          iconUrl: string
          title: string
        }
        Update: {
          characterId?: number
          description?: string
          iconUrl?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_NormalAttacks_characterId_fkey"
            columns: ["characterId"]
            isOneToOne: true
            referencedRelation: "Characters"
            referencedColumns: ["id"]
          },
        ]
      }
      NormalAttackTextData: {
        Row: {
          characterId: number
          id: number
          level1: string
          level10: string
          level11: string
          level12: string
          level13: string
          level14: string
          level15: string
          level2: string
          level3: string
          level4: string
          level5: string
          level6: string
          level7: string
          level8: string
          level9: string
          name: string
        }
        Insert: {
          characterId: number
          id?: number
          level1: string
          level10: string
          level11: string
          level12: string
          level13: string
          level14: string
          level15: string
          level2: string
          level3: string
          level4: string
          level5: string
          level6: string
          level7: string
          level8: string
          level9: string
          name: string
        }
        Update: {
          characterId?: number
          id?: number
          level1?: string
          level10?: string
          level11?: string
          level12?: string
          level13?: string
          level14?: string
          level15?: string
          level2?: string
          level3?: string
          level4?: string
          level5?: string
          level6?: string
          level7?: string
          level8?: string
          level9?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_normalattacktextdata_characterid_fkey"
            columns: ["characterId"]
            isOneToOne: false
            referencedRelation: "Characters"
            referencedColumns: ["id"]
          },
        ]
      }
      PassiveTalents: {
        Row: {
          characterId: number
          description: string
          iconUrl: string
          id: number
          title: string
        }
        Insert: {
          characterId: number
          description: string
          iconUrl: string
          id?: number
          title: string
        }
        Update: {
          characterId?: number
          description?: string
          iconUrl?: string
          id?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_PassiveTalents_characterId_fkey"
            columns: ["characterId"]
            isOneToOne: false
            referencedRelation: "Characters"
            referencedColumns: ["id"]
          },
        ]
      }
      Regions: {
        Row: {
          english: string
          id: number
          japanese: string
        }
        Insert: {
          english: string
          id?: number
          japanese: string
        }
        Update: {
          english?: string
          id?: number
          japanese?: string
        }
        Relationships: []
      }
      Stats: {
        Row: {
          english: string
          id: number
          japanese: string
          text: string
        }
        Insert: {
          english: string
          id?: number
          japanese: string
          text: string
        }
        Update: {
          english?: string
          id?: number
          japanese?: string
          text?: string
        }
        Relationships: []
      }
      Visions: {
        Row: {
          english: string
          id: number
          japanese: string
        }
        Insert: {
          english: string
          id?: number
          japanese: string
        }
        Update: {
          english?: string
          id?: number
          japanese?: string
        }
        Relationships: []
      }
      WeaponBaseAttacks: {
        Row: {
          baseAttackId: number
          level1_20: number
          level10_20: number
          level11_20: number
          level12_20: number
          level13_20: number
          level14_20: number
          level15_20: number
          level16_20: number
          level17_20: number
          level18_20: number
          level19_20: number
          level2_20: number
          level20_20: number
          level20_40: number
          level21_40: number
          level22_40: number
          level23_40: number
          level24_40: number
          level25_40: number
          level26_40: number
          level27_40: number
          level28_40: number
          level29_40: number
          level3_20: number
          level30_40: number
          level31_40: number
          level32_40: number
          level33_40: number
          level34_40: number
          level35_40: number
          level36_40: number
          level37_40: number
          level38_40: number
          level39_40: number
          level4_20: number
          level40_40: number
          level40_50: number
          level41_50: number
          level42_50: number
          level43_50: number
          level44_50: number
          level45_50: number
          level46_50: number
          level47_50: number
          level48_50: number
          level49_50: number
          level5_20: number
          level50_50: number
          level50_60: number
          level51_60: number
          level52_60: number
          level53_60: number
          level54_60: number
          level55_60: number
          level56_60: number
          level57_60: number
          level58_60: number
          level59_60: number
          level6_20: number
          level60_60: number
          level60_70: number
          level61_70: number
          level62_70: number
          level63_70: number
          level64_70: number
          level65_70: number
          level66_70: number
          level67_70: number
          level68_70: number
          level69_70: number
          level7_20: number
          level70_70: number
          level70_80: number
          level71_80: number
          level72_80: number
          level73_80: number
          level74_80: number
          level75_80: number
          level76_80: number
          level77_80: number
          level78_80: number
          level79_80: number
          level8_20: number
          level80_80: number
          level80_90: number
          level81_90: number
          level82_90: number
          level83_90: number
          level84_90: number
          level85_90: number
          level86_90: number
          level87_90: number
          level88_90: number
          level89_90: number
          level9_20: number
          level90_90: number
        }
        Insert: {
          baseAttackId: number
          level1_20: number
          level10_20: number
          level11_20: number
          level12_20: number
          level13_20: number
          level14_20: number
          level15_20: number
          level16_20: number
          level17_20: number
          level18_20: number
          level19_20: number
          level2_20: number
          level20_20: number
          level20_40: number
          level21_40: number
          level22_40: number
          level23_40: number
          level24_40: number
          level25_40: number
          level26_40: number
          level27_40: number
          level28_40: number
          level29_40: number
          level3_20: number
          level30_40: number
          level31_40: number
          level32_40: number
          level33_40: number
          level34_40: number
          level35_40: number
          level36_40: number
          level37_40: number
          level38_40: number
          level39_40: number
          level4_20: number
          level40_40: number
          level40_50: number
          level41_50: number
          level42_50: number
          level43_50: number
          level44_50: number
          level45_50: number
          level46_50: number
          level47_50: number
          level48_50: number
          level49_50: number
          level5_20: number
          level50_50: number
          level50_60: number
          level51_60: number
          level52_60: number
          level53_60: number
          level54_60: number
          level55_60: number
          level56_60: number
          level57_60: number
          level58_60: number
          level59_60: number
          level6_20: number
          level60_60: number
          level60_70: number
          level61_70: number
          level62_70: number
          level63_70: number
          level64_70: number
          level65_70: number
          level66_70: number
          level67_70: number
          level68_70: number
          level69_70: number
          level7_20: number
          level70_70: number
          level70_80: number
          level71_80: number
          level72_80: number
          level73_80: number
          level74_80: number
          level75_80: number
          level76_80: number
          level77_80: number
          level78_80: number
          level79_80: number
          level8_20: number
          level80_80: number
          level80_90: number
          level81_90: number
          level82_90: number
          level83_90: number
          level84_90: number
          level85_90: number
          level86_90: number
          level87_90: number
          level88_90: number
          level89_90: number
          level9_20: number
          level90_90: number
        }
        Update: {
          baseAttackId?: number
          level1_20?: number
          level10_20?: number
          level11_20?: number
          level12_20?: number
          level13_20?: number
          level14_20?: number
          level15_20?: number
          level16_20?: number
          level17_20?: number
          level18_20?: number
          level19_20?: number
          level2_20?: number
          level20_20?: number
          level20_40?: number
          level21_40?: number
          level22_40?: number
          level23_40?: number
          level24_40?: number
          level25_40?: number
          level26_40?: number
          level27_40?: number
          level28_40?: number
          level29_40?: number
          level3_20?: number
          level30_40?: number
          level31_40?: number
          level32_40?: number
          level33_40?: number
          level34_40?: number
          level35_40?: number
          level36_40?: number
          level37_40?: number
          level38_40?: number
          level39_40?: number
          level4_20?: number
          level40_40?: number
          level40_50?: number
          level41_50?: number
          level42_50?: number
          level43_50?: number
          level44_50?: number
          level45_50?: number
          level46_50?: number
          level47_50?: number
          level48_50?: number
          level49_50?: number
          level5_20?: number
          level50_50?: number
          level50_60?: number
          level51_60?: number
          level52_60?: number
          level53_60?: number
          level54_60?: number
          level55_60?: number
          level56_60?: number
          level57_60?: number
          level58_60?: number
          level59_60?: number
          level6_20?: number
          level60_60?: number
          level60_70?: number
          level61_70?: number
          level62_70?: number
          level63_70?: number
          level64_70?: number
          level65_70?: number
          level66_70?: number
          level67_70?: number
          level68_70?: number
          level69_70?: number
          level7_20?: number
          level70_70?: number
          level70_80?: number
          level71_80?: number
          level72_80?: number
          level73_80?: number
          level74_80?: number
          level75_80?: number
          level76_80?: number
          level77_80?: number
          level78_80?: number
          level79_80?: number
          level8_20?: number
          level80_80?: number
          level80_90?: number
          level81_90?: number
          level82_90?: number
          level83_90?: number
          level84_90?: number
          level85_90?: number
          level86_90?: number
          level87_90?: number
          level88_90?: number
          level89_90?: number
          level9_20?: number
          level90_90?: number
        }
        Relationships: []
      }
      WeaponImageUrls: {
        Row: {
          url: string
          weaponId: number
        }
        Insert: {
          url: string
          weaponId?: number
        }
        Update: {
          url?: string
          weaponId?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_WeaponImageUrls_weaponId_fkey"
            columns: ["weaponId"]
            isOneToOne: true
            referencedRelation: "Weapons"
            referencedColumns: ["id"]
          },
        ]
      }
      WeaponRefinements: {
        Row: {
          description: string
          id: number
          rank: number
          title: string
          weaponId: number
        }
        Insert: {
          description: string
          id?: number
          rank: number
          title: string
          weaponId: number
        }
        Update: {
          description?: string
          id?: number
          rank?: number
          title?: string
          weaponId?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_WeaponRefinements_weaponId_fkey"
            columns: ["weaponId"]
            isOneToOne: false
            referencedRelation: "Weapons"
            referencedColumns: ["id"]
          },
        ]
      }
      Weapons: {
        Row: {
          baseAttackId: number
          description: string
          id: number
          name: string
          star: number
          subStatId: number
          subStatValue: number
          weaponTypeId: number
        }
        Insert: {
          baseAttackId: number
          description: string
          id?: number
          name: string
          star: number
          subStatId: number
          subStatValue: number
          weaponTypeId: number
        }
        Update: {
          baseAttackId?: number
          description?: string
          id?: number
          name?: string
          star?: number
          subStatId?: number
          subStatValue?: number
          weaponTypeId?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_Weapons_baseAttackId_fkey"
            columns: ["baseAttackId"]
            isOneToOne: false
            referencedRelation: "WeaponBaseAttacks"
            referencedColumns: ["baseAttackId"]
          },
          {
            foreignKeyName: "public_Weapons_subStatId_fkey"
            columns: ["subStatId"]
            isOneToOne: false
            referencedRelation: "Stats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Weapons_subStatValue_fkey"
            columns: ["subStatValue"]
            isOneToOne: false
            referencedRelation: "WeaponSubStats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_weapons_weaponTypeId_fkey"
            columns: ["weaponTypeId"]
            isOneToOne: false
            referencedRelation: "WeaponTypes"
            referencedColumns: ["id"]
          },
        ]
      }
      WeaponSubStats: {
        Row: {
          baseAttackId: number
          id: number
          level1_20: number
          level10_20: number
          level11_20: number
          level12_20: number
          level13_20: number
          level14_20: number
          level15_20: number
          level16_20: number
          level17_20: number
          level18_20: number
          level19_20: number
          level2_20: number
          level20_20: number
          level20_40: number
          level21_40: number
          level22_40: number
          level23_40: number
          level24_40: number
          level25_40: number
          level26_40: number
          level27_40: number
          level28_40: number
          level29_40: number
          level3_20: number
          level30_40: number
          level31_40: number
          level32_40: number
          level33_40: number
          level34_40: number
          level35_40: number
          level36_40: number
          level37_40: number
          level38_40: number
          level39_40: number
          level4_20: number
          level40_40: number
          level40_50: number
          level41_50: number
          level42_50: number
          level43_50: number
          level44_50: number
          level45_50: number
          level46_50: number
          level47_50: number
          level48_50: number
          level49_50: number
          level5_20: number
          level50_50: number
          level50_60: number
          level51_60: number
          level52_60: number
          level53_60: number
          level54_60: number
          level55_60: number
          level56_60: number
          level57_60: number
          level58_60: number
          level59_60: number
          level6_20: number
          level60_60: number
          level60_70: number
          level61_70: number
          level62_70: number
          level63_70: number
          level64_70: number
          level65_70: number
          level66_70: number
          level67_70: number
          level68_70: number
          level69_70: number
          level7_20: number
          level70_70: number
          level70_80: number
          level71_80: number
          level72_80: number
          level73_80: number
          level74_80: number
          level75_80: number
          level76_80: number
          level77_80: number
          level78_80: number
          level79_80: number
          level8_20: number
          level80_80: number
          level80_90: number
          level81_90: number
          level82_90: number
          level83_90: number
          level84_90: number
          level85_90: number
          level86_90: number
          level87_90: number
          level88_90: number
          level89_90: number
          level9_20: number
          level90_90: number
          statId: number
        }
        Insert: {
          baseAttackId: number
          id: number
          level1_20: number
          level10_20: number
          level11_20: number
          level12_20: number
          level13_20: number
          level14_20: number
          level15_20: number
          level16_20: number
          level17_20: number
          level18_20: number
          level19_20: number
          level2_20: number
          level20_20: number
          level20_40: number
          level21_40: number
          level22_40: number
          level23_40: number
          level24_40: number
          level25_40: number
          level26_40: number
          level27_40: number
          level28_40: number
          level29_40: number
          level3_20: number
          level30_40: number
          level31_40: number
          level32_40: number
          level33_40: number
          level34_40: number
          level35_40: number
          level36_40: number
          level37_40: number
          level38_40: number
          level39_40: number
          level4_20: number
          level40_40: number
          level40_50: number
          level41_50: number
          level42_50: number
          level43_50: number
          level44_50: number
          level45_50: number
          level46_50: number
          level47_50: number
          level48_50: number
          level49_50: number
          level5_20: number
          level50_50: number
          level50_60: number
          level51_60: number
          level52_60: number
          level53_60: number
          level54_60: number
          level55_60: number
          level56_60: number
          level57_60: number
          level58_60: number
          level59_60: number
          level6_20: number
          level60_60: number
          level60_70: number
          level61_70: number
          level62_70: number
          level63_70: number
          level64_70: number
          level65_70: number
          level66_70: number
          level67_70: number
          level68_70: number
          level69_70: number
          level7_20: number
          level70_70: number
          level70_80: number
          level71_80: number
          level72_80: number
          level73_80: number
          level74_80: number
          level75_80: number
          level76_80: number
          level77_80: number
          level78_80: number
          level79_80: number
          level8_20: number
          level80_80: number
          level80_90: number
          level81_90: number
          level82_90: number
          level83_90: number
          level84_90: number
          level85_90: number
          level86_90: number
          level87_90: number
          level88_90: number
          level89_90: number
          level9_20: number
          level90_90: number
          statId: number
        }
        Update: {
          baseAttackId?: number
          id?: number
          level1_20?: number
          level10_20?: number
          level11_20?: number
          level12_20?: number
          level13_20?: number
          level14_20?: number
          level15_20?: number
          level16_20?: number
          level17_20?: number
          level18_20?: number
          level19_20?: number
          level2_20?: number
          level20_20?: number
          level20_40?: number
          level21_40?: number
          level22_40?: number
          level23_40?: number
          level24_40?: number
          level25_40?: number
          level26_40?: number
          level27_40?: number
          level28_40?: number
          level29_40?: number
          level3_20?: number
          level30_40?: number
          level31_40?: number
          level32_40?: number
          level33_40?: number
          level34_40?: number
          level35_40?: number
          level36_40?: number
          level37_40?: number
          level38_40?: number
          level39_40?: number
          level4_20?: number
          level40_40?: number
          level40_50?: number
          level41_50?: number
          level42_50?: number
          level43_50?: number
          level44_50?: number
          level45_50?: number
          level46_50?: number
          level47_50?: number
          level48_50?: number
          level49_50?: number
          level5_20?: number
          level50_50?: number
          level50_60?: number
          level51_60?: number
          level52_60?: number
          level53_60?: number
          level54_60?: number
          level55_60?: number
          level56_60?: number
          level57_60?: number
          level58_60?: number
          level59_60?: number
          level6_20?: number
          level60_60?: number
          level60_70?: number
          level61_70?: number
          level62_70?: number
          level63_70?: number
          level64_70?: number
          level65_70?: number
          level66_70?: number
          level67_70?: number
          level68_70?: number
          level69_70?: number
          level7_20?: number
          level70_70?: number
          level70_80?: number
          level71_80?: number
          level72_80?: number
          level73_80?: number
          level74_80?: number
          level75_80?: number
          level76_80?: number
          level77_80?: number
          level78_80?: number
          level79_80?: number
          level8_20?: number
          level80_80?: number
          level80_90?: number
          level81_90?: number
          level82_90?: number
          level83_90?: number
          level84_90?: number
          level85_90?: number
          level86_90?: number
          level87_90?: number
          level88_90?: number
          level89_90?: number
          level9_20?: number
          level90_90?: number
          statId?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_WeaponSubStats_baseAttackId_fkey"
            columns: ["baseAttackId"]
            isOneToOne: false
            referencedRelation: "WeaponBaseAttacks"
            referencedColumns: ["baseAttackId"]
          },
          {
            foreignKeyName: "public_WeaponSubStats_statId_fkey"
            columns: ["statId"]
            isOneToOne: false
            referencedRelation: "Stats"
            referencedColumns: ["id"]
          },
        ]
      }
      WeaponTypes: {
        Row: {
          english: string
          id: number
          japanese: string
        }
        Insert: {
          english: string
          id?: number
          japanese: string
        }
        Update: {
          english?: string
          id?: number
          japanese?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
