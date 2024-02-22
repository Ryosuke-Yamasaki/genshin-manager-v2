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
            foreignKeyName: "public_artifacters_mainstatid_fkey"
            columns: ["mainStatId"]
            isOneToOne: false
            referencedRelation: "ArtifactMainStats"
            referencedColumns: ["statId"]
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
          }
        ]
      }
      ArtifacterSubOptions: {
        Row: {
          artifacterId: string
          statId: number
          value: number
        }
        Insert: {
          artifacterId: string
          statId: number
          value: number
        }
        Update: {
          artifacterId?: string
          statId?: number
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_ArtifacterSubOptions_artifacterId_fkey"
            columns: ["artifacterId"]
            isOneToOne: true
            referencedRelation: "Artifacters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_ArtifacterSubOptions_statId_fkey"
            columns: ["statId"]
            isOneToOne: false
            referencedRelation: "Stats"
            referencedColumns: ["id"]
          }
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
          }
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
          }
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
          }
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
